import { gql } from 'graphql-request'
import { gqClient } from './graphql.server'

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

const PostsQuery = gql`
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

const PostQuery = gql`
  query GetPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      title
      content {
        html
      }
      coverImage {
        id
      }
      excerpt
      publishedAt
    }
  }
`

export const getPosts = async () => {
  try {
    const posts = await gqClient.request(PostsQuery)

    if (!posts) {
      return []
    }
    return posts.posts as Array<Post>
  } catch (error) {
    return []
  }
}

export const getPost = async (slug: Post['slug']) => {
  try {
    const post = await gqClient.request(PostQuery, { slug })
    if (!post) {
      return null
    }
    return post.post as Post
  } catch (error) {
    return null
  }
}
