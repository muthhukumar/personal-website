// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { getPost, getPosts, Post } from './md.server'
import { redisCache } from './redis.server'

const getCachedPosts = async () => {
  const hasPosts = await redisCache.has('posts')
  if (!hasPosts) {
    const postsFromApi = await getPosts()
    await redisCache.set('posts', 'id', postsFromApi)
  }

  const posts = await redisCache.get('posts')

  return posts
}

const getCachedPost = async (id: Post['id']) => {
  const postId = `${id}:post`
  const hasPost = await redisCache.has(postId)
  if (!hasPost) {
    const postsFromApi = await getPost(id)
    if (!postsFromApi) {
      return null
    }
    await redisCache.set(`post${postId}`, postId, postsFromApi)
  }

  const post = await redisCache.get(`post${postId}`)

  return post as Post
}

export { getCachedPosts, getCachedPost }
