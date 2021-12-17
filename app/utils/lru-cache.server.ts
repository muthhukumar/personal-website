import LRU from 'lru-cache'
import { getPost, getPosts, Post } from './md.server'

console.log('this file getting called again and again')

const cache = new LRU({
  max: 500,
  length: function (n: string) {
    console.log('n.length', n.length)
    return n.length
  },
  dispose: (key, n) => {
    console.log('disposethekey', n)
  },
  maxAge: 1000 * 60 * 60,
})

const getCachedPosts = async () => {
  if (!cache.has('posts')) {
    console.log('getting psots again and aagain')
    const postsFromApi = await getPosts()
    cache.set('posts', postsFromApi)
  }

  return cache.get('posts') as Array<Post>
}

const getCachedPost = async (id: Post['id']) => {
  const postId = `${id}:post`
  if (!cache.has(postId)) {
    console.log('its getting called again and again')

    const postsFromApi = await getPost(id)
    cache.set(postId, postsFromApi)
  }

  return cache.get(postId) as Post
}

export { getCachedPosts, getCachedPost }
