import redis from 'ioredis'

declare global {
  // This prevents us from making multiple connections to the db when the
  // require cache is cleared.
  // eslint-disable-next-line
  var redisClient: redis.Redis | undefined, primaryClient: redis.Redis | undefined
}

function createClient(name: string, options: redis.RedisOptions): redis.Redis {
  let client = global[name]
  if (!client) {
    // eslint-disable-next-line no-multi-assign
    client = global[name] = new redis(options)

    client.on('error', (error: string) => {
      console.error(`REDIS ${name} ERROR:`, error)
    })
  }
  return client
}

// const redisUrl = getRequiredServerEnvVar('REDIS_URL')

const redisClient = createClient('redisCache', {
  host: 'localhost',
  port: 6379,
  db: 0,
})

function get<Value = unknown>(key: string): Promise<Value | null> {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const firstValue = (await redisClient.hvals(key))[0]

    if (!firstValue) {
      return resolve(null)
    }

    const parsedValue = JSON.parse(firstValue)
    resolve(parsedValue ? parsedValue : null)
  })
}

function set<Value>(key: string, key2: string, value: Value): Promise<'OK' | 'ERROR'> {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    try {
      await redisClient.hset(key, key2, JSON.stringify(value))
      resolve('OK')
    } catch {
      resolve('ERROR')
    }
  })
}

async function has(key: string): Promise<boolean> {
  const value = await get(key)
  if (!value) {
    return false
  }
  return true
}

function del(key: string): Promise<string> {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    try {
      await redisClient.hdel(key)
      resolve('OK')
    } catch {
      resolve('ERROR')
    }
  })
}

const redisCache = { has, get, set, del }

export { redisClient, redisCache }
