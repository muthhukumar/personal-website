import { gqRequest } from './graphql.server'

export type Post = {
  title: string
  excerpt: string
  id: string
  slug: string
  author: string
  coverImage: {
    url: string
  }
  categories: string[]
  publishedAt: string
  content: {
    html: string
  }
  hits: number
  isDraft: boolean
  userEmail: string
}

const PostsQuery = `
  query MyQuery($search: String!) {
    posts(where: { _search: $search }) {
      id
      slug
      title
      publishedAt
      excerpt
    }
  }
`

const PostQuery = `
  query GetPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      title
      content {
        html
      }
      coverImage {
        url
      }
      excerpt
      publishedAt
    }
  }
`

export const getPosts = async (query?: string) => {
  try {
    const posts = await gqRequest(PostsQuery, { search: query ?? '' })

    if (!posts) {
      return []
    }
    return posts.posts as Array<Post>
  } catch {
    return []
  }
}

export const getPost = async (slug: Post['slug']) => {
  try {
    const post = await gqRequest(PostQuery, { slug })

    if (!post) {
      return null
    }
    return post.post as Post
  } catch {
    return null
  }
}
