// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import LRU from 'lru-cache'
import { getPost, getPosts, Post } from './md.server'

const cache = new LRU({
  max: 10000,
  length: function (n: string) {
    return n.length
  },
  maxAge: 1000 * 60 * 60,
})

const getCachedPosts = async () => {
  if (!cache.has('posts')) {
    const postsFromApi = await getPosts()
    cache.set('posts', postsFromApi)
  }

  return cache.get('posts') as Array<Post>
}

const getCachedPost = async (id: Post['id']) => {
  const postId = `${id}:post`
  if (!cache.has(postId)) {
    const postsFromApi = await getPost(id)
    cache.set(postId, postsFromApi)
  }

  return cache.get(postId) as Post
}

export { getCachedPosts, getCachedPost }
