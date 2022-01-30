import _ from 'lodash'

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
  publishedDate: string
  updatedAt: string
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

export type Book = {
  name: string
  content: {
    html: string
  }
  author: string
  slug: string
  seo: {
    title: string
    keywords: string
    image: {
      url: string
    }
    description: string
  }
  publishedDate: string
  updatedAt: string
  id: string
}

export type Note = {
  id: string
  title: string
  slug: string
  seo: {
    title: string
    keywords: string
    image: {
      url: string
    }
    description: string
  }
  publishedDate: string
  excerpt: string
  content: {
    html: string
  }
}

export type Photo = {
  'id': string
  'title': string
  'image': {
    'id': string
    'url': string
  }
}

const PhotosQuery = `
query MyQuery {
  photos {
    id
    title
    image {
      ... on Asset {
        id
        url
      }
    }
  }
}
`

const PostsQuery = `
query MyQuery($search: String! = "") {
  posts(where: {_search: $search}, orderBy: publishedDate_DESC) {
    id
    slug
    title
    publishedDate
    updatedAt
    excerpt
    seo {
      image {
        url
      }
    }
  }
}
`

const PostQuery = `
query GetPostBySlug($slug: String! = "") {
  post(where: {slug: $slug}) {
    title
    id
    content {
      html
    }
    coverImage {
      url
    }
    excerpt
    publishedDate
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

const BooksQuery = `
query MyQuery($search: String! = "") {
  books(where: {_search: $search }) {
    id
    name
    slug
    author
    publishedDate
  }
}
`

const BookQuery = `
query MyQuery($slug: String = "") {
  book(where: {slug: $slug}) {
    author
    content{
      html
    }
    name
    slug
    seo {
      title
      keywords
      image {
        url
      }
    }
  }
}
`

const NotesQuery = `
query MyQuery($search: String! = "")  {
  notes(where: {_search: $search }) {
    title
    slug
    id
    excerpt
    publishedDate
  }
}
`

const NoteQuery = `
query MyQuery($slug: String = "") {
  note(where: {slug: $slug}) {
    title
    slug
    seo {
      title
      keywords
      image {
        url
      }
      description
    }
    content {
      html
    }
  }
}

`

export const getPosts = async (query?: string, context?: Record<string, string>) => {
  try {
    const posts = await gqRequest(PostsQuery, { search: query ?? '' }, context)

    if (!posts) {
      return []
    }
    return posts.posts as Array<Post>
  } catch {
    return []
  }
}

export const getRandomPosts = async (context: Record<string, string>, currentPost: Post) => {
  const posts = await getPosts('', context)

  const filteredPosts = posts.filter((post) => {
    const isNotEqual = post.id !== currentPost.id
    return isNotEqual
  })

  const shuffledPosts = _.shuffle(filteredPosts)

  return shuffledPosts.slice(0, 3)
}

export const getPost = async (slug: Post['slug'], context?: Record<string, string>) => {
  try {
    const post = await gqRequest(PostQuery, { slug }, context)

    if (!post) {
      return null
    }
    return post.post as Post
  } catch {
    return null
  }
}

export const getBooks = async (query?: string, context?: Record<string, string>) => {
  try {
    const books = await gqRequest(BooksQuery, { search: query ?? '' }, context)

    if (!books) {
      return []
    }
    return books.books as Array<Book>
  } catch {
    return []
  }
}

export const getBook = async (slug: Book['slug'], context?: Record<string, string>) => {
  try {
    const book = await gqRequest(BookQuery, { slug }, context)

    if (!book) {
      return null
    }
    return book.book as Book
  } catch {
    return null
  }
}

export const getNotes = async (query?: string, context?: Record<string, string>) => {
  try {
    const notes = await gqRequest(NotesQuery, { search: query ?? '' }, context)

    if (!notes) {
      return []
    }
    return notes.notes as Array<Note>
  } catch {
    return []
  }
}

export const getNote = async (slug: Note['slug'], context?: Record<string, string>) => {
  try {
    const note = await gqRequest(NoteQuery, { slug }, context)

    if (!note) {
      return null
    }
    return note.note as Note
  } catch {
    return null
  }
}

export const getPhotos = async (context?: Record<string, string>) => {
  try {
    const photos = await gqRequest(PhotosQuery, {}, context)

    if (!photos) {
      return []
    }
    return photos.photos as Array<Photo>
  } catch {
    return []
  }
}
