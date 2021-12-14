import nodePath from 'path'
import { Octokit as createOctokit } from '@octokit/rest'
import { throttling } from '@octokit/plugin-throttling'

type GitHubFile = { path: string; content: string }

const botGithubToken = process.env.BOT_GITHUB_TOKEN

if (!botGithubToken) {
  throw new Error('Provide the BOT_GITHUB_TOKEN.')
}

const Octokit = createOctokit.plugin(throttling)

type ThrottleOptions = {
  method: string
  url: string
  request: { retryCount: number }
}
const octokit = new Octokit({
  auth: botGithubToken,
  throttle: {
    onRateLimit: (retryAfter: number, options: ThrottleOptions) => {
      console.warn(
        `Request quota exhausted for request ${options.method} ${options.url}. Retrying after ${retryAfter} seconds.`,
      )

      return true
    },
    onAbuseLimit: (retryAfter: number, options: ThrottleOptions) => {
      // does not retry, only logs a warning
      octokit.log.warn(`Abuse detected for request ${options.method} ${options.url}`)
    },
  },
})

/**
 *
 * @param sha the hash for the file (retrieved via `downloadDirList`)
 * @returns a promise that resolves to a string of the contents of the file
 */
async function downloadFileBySha(sha: string) {
  const { data } = await octokit.request('GET /repos/{owner}/{repo}/git/blobs/{file_sha}', {
    owner: 'muthhukumar',
    repo: 'remix-blog',
    file_sha: sha,
  })
  //                                lol
  const encoding = data.encoding as Parameters<typeof Buffer.from>['1']
  return Buffer.from(data.content, encoding).toString()
}

async function downloadFile(path: string) {
  const { data } = (await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    owner: 'muthhukumar',
    repo: 'remix-blog',
    path,
  })) as { data: { content?: string; encoding?: string } }

  if (!data.content || !data.encoding) {
    console.error(data)
    throw new Error(
      `Tried to get ${path} but got back something that was unexpected. It doesn't have a content or encoding property`,
    )
  }

  //                                lol
  const encoding = data.encoding as Parameters<typeof Buffer.from>['1']
  return Buffer.from(data.content, encoding).toString()
}

/**
 *
 * @param path the full path to list
 * @returns a promise that resolves to a file ListItem of the files/directories in the given directory (not recursive)
 */
async function downloadDirList(path: string) {
  const resp = await octokit.repos.getContent({
    owner: 'muthhukumar',
    repo: 'remix-blog',
    path,
  })
  const data = resp.data

  if (!Array.isArray(data)) {
    throw new Error(
      `Tried to download content from ${path}. GitHub did not return an array of files. This should never happen...`,
    )
  }

  return data
}

export { downloadFileBySha, downloadDirList, downloadFile }
