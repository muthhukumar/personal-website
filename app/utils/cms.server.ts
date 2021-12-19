import { Context, getGqClient } from './graphql.server'

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
  query MyQuery {
    posts {
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

export const getPosts = async (context: Context) => {
  try {
    const { posts } = await getGqClient(context).request(PostsQuery)

    if (!posts) {
      return []
    }
    return posts as Array<Post>
  } catch (error) {
    return []
  }
}

export const getPost = async (slug: Post['slug'], context: Context) => {
  try {
    const { post } = await getGqClient(context).request(PostQuery, { slug })
    if (!post) {
      return null
    }
    return post as Post
  } catch (error) {
    return null
  }
}
