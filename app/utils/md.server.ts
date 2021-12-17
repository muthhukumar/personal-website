export type Post = {
	title: string
	description: string
	id: string
	slug: string
	author: string
	ogImage: string
	categories: string[]
	publishedAt: string
	body: string
	hits: number
	isDraft: boolean
	userEmail: string
}

const apiBaseUrl = process.env.API_BASE_URL
const apiKey = process.env.API_KEY

if (!apiBaseUrl) {
	throw new Error("API base URL is not provided")
}

if (!apiKey) {
	throw new Error('API key is not provided')
}

export const getPosts = async () => {
	const response = await fetch(`${apiBaseUrl}/resource/posts`, {
		headers: {
			'x-api-key': apiKey
		}
	})

	const json = await response.json()

	return json.data as Array<Post>
}


export const getPost = async (postId: Post['id']) => {
	const response = await fetch(`${apiBaseUrl}/resource/post/${postId}`, {
		headers: {
			'x-api-key': apiKey
		}
	})

	const json = await response.json()

	return json.data as Post
}

export default async function markdownToHtml(markdown: string) {
	const { unified } = await import('unified')
	const { default: remarkHtml } = await import('remark-html')
	const { default: remarkParse } = await import('remark-parse')
	const html = await unified().use(remarkParse).use(remarkHtml).process(markdown)
	return html.toString()
}