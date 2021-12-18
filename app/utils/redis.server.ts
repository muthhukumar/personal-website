import redis from 'redis'
import { getRequiredServerEnvVar } from './env.server'

declare global {
  // This prevents us from making multiple connections to the db when the
  // require cache is cleared.
  // eslint-disable-next-line
  var redisClient: redis.RedisClient | undefined, primaryClient: redis.RedisClient | undefined
}

function createClient(name: string, options: redis.ClientOpts): redis.RedisClient {
  let client = global[name]
  if (!client) {
    const url = new URL(options.url ?? 'http://no-redis-url.example.com?weird')
    // eslint-disable-next-line no-multi-assign
    client = global[name] = redis.createClient(options)

    client.on('error', (error: string) => {
      console.error(`REDIS ${name} (${url.host}) ERROR:`, error)
    })
  }
  return client
}

const redisUrl = getRequiredServerEnvVar('REDIS_URL')

const redisClient = createClient('blog cache', { url: redisUrl })

// NOTE: Caching should never crash the app, so instead of rejecting all these
// promises, we'll just resolve things with null and log the error.

function get<Value = unknown>(key: string): Promise<Value | null> {
  return new Promise((resolve) => {
    redisClient.get(key, (err: Error | null, result: string | null) => {
      if (err) {
        console.error(`There is an error in the redis client when getting the value`, err)
      }
      resolve(result ? (JSON.parse(result) as Value) : null)
    })
  })
}

function set<Value>(key: string, value: Value): Promise<'OK'> {
  return new Promise((resolve) => {
    redisClient.set(key, JSON.stringify(value), (err: Error | null, reply: 'OK') => {
      if (err)  console.error(`There is an error in the redis client when setting the value`, err)
      resolve(reply)
    })
  })
}

function del(key: string): Promise<string> {
  return new Promise((resolve) => {
    // fire and forget on primary, we only care about replica
    primaryClient?.del(key, (err: Error | null) => {
      if (err) {
        console.error('Primary delete error', err)
      }
    })
    redisClient.del(key, (err: Error | null, result: number | null) => {
      if (err) {
				console.error(`There is an error in the redis client when deleting the value`, err)
        resolve('error')
      } else {
        resolve(`${key} deleted: ${result}`)
      }
    })
  })
}

const redisCache = { get, set, del, name: 'redis' }
export { get, set, del, redisCache }
