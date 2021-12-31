import { gqRequest } from './graphql.server'

export type Post = {
  id: string
  title: string
  content: {
    html: string
  }
  coverImage: {
    url: string
  }
  excerpt: string
  publishedAt: string
  lastUpdatedAt: string
  seo: {
    title: string
    keywords: string
    image: {
      url: string
    }
    description: string
  }
  slug: string
}

const PostsQuery = `
  query MyQuery($search: String! = "") {
    posts(where: { _search: $search }) {
      id
      slug
      title
      publishedAt
      lastUpdatedAt
      excerpt
    }
  }
`

const PostQuery = `
query GetPostBySlug($slug: String!) {
  post(where: {slug: $slug}) {
    title
    content {
      html
    }
    coverImage {
      url
    }
    excerpt
    publishedAt
    seo {
      title
      keywords
      image {
        url
      }
      description
    }
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
