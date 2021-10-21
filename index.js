// @ts-nocheck
const path = require('path')
const express = require('express')
const compression = require('compression')
const morgan = require('morgan')
const {createRequestHandler} = require('@remix-run/express')

const MODE = process.env.NODE_ENV
const BUILD_DIR = path.join(process.cwd(), 'server', 'build')

const app = express()

app.use(morgan('tiny'))
app.use(compression())

app.use(express.static('public', {maxAge: '1w'}))

// If we ever change our font (which we quite possibly never will)
// then we'll just want to change the filename or something...
app.use(express.static('public/fonts', {immutable: true, maxAge: '1y'}))

// Remix fingerprints its assets so we can cache forever
app.use(express.static('public/build', {immutable: true, maxAge: '1y'}))

app.use((_, res, next) => {
  res.header('x-powered-by', 'remix')
  next()
})

app.all('*', (...args) => {
  if (MODE === 'production') {
    return createRequestHandler({build: require('./server/build')})(...args)
  }

  purgeRequireCache()
  const build = require('./server/build')
  return createRequestHandler({build, mode: MODE})(...args)
})

const port = process.env.PORT ?? 3000

app.listen(port, () => {
  // preload the build so we're ready for the first request
  // we want the server to start accepting requests asap, so we wait until now
  // to preload the build
  require('./server/build')
  // eslint-disable-next-line no-console
  console.log(`Express server listening on port ${port}`)
})

////////////////////////////////////////////////////////////////////////////////
function purgeRequireCache() {
  // purge require cache on requests for "server side HMR" this won't const
  // you have in-memory objects between requests in development,
  // alternatively you can set up nodemon/pm2-dev to restart the server on
  // file changes, we prefer the DX of this though, so we've included it
  // for you by default
  for (const key in require.cache) {
    if (key.startsWith(BUILD_DIR)) {
      delete require.cache[key]
    }
  }
}
