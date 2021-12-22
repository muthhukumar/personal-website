module.exports = {
  apps: [
    {
      name: 'Server',
      script: 'npm run start:dev',
      ignore_watch: ['.'],
      env: {
        FORCE_COLOR: '1',
        NODE_ENV: process.env.NODE_ENV ?? 'development',
      },
    },
    {
      name: 'Remix watch mode',
      script: 'remix watch',
      ignore_watch: ['.'],
      env: {
        FORCE_COLOR: '1',
        NODE_ENV: process.env.NODE_ENV ?? 'development',
      },
    },
    {
      name: 'Post css',
      script: 'npm run watch:css',
      watch: ['styles'],
      autorestart: false,
      env: {
        NODE_ENV: process.env.NODE_ENV ?? 'development',
        FORCE_COLOR: '1',
      },
    },
  ],
}
