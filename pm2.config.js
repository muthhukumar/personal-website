module.exports = {
  apps: [
    {
      name: 'Server',
      script: 'node ./index.js',
      watch: ['./index.js'],
      env: {
        NODE_ENV: process.env.NODE_ENV ?? 'development',
        FORCE_COLOR: '1',
      },
    },
    {
      name: 'Remix',
      script: 'remix dev',
      ignore_watch: ['.'],
      env: {
        FORCE_COLOR: '1',
        NODE_ENV: process.env.NODE_ENV ?? 'development',
      },
    },
  ],
}
