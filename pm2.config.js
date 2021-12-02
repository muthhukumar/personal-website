module.exports = {
  apps: [
    // {
    //   name: 'Remix',
    //   script: 'remix dev',
    //   ignore_watch: ['.'],
    //   env: {
    //     FORCE_COLOR: '1',
    //     NODE_ENV: process.env.NODE_ENV ?? 'development',
    //   },
    // },
    {
      name: 'Vercel',
      script: 'vercel dev',
      ignore_watch: ['.'],
      env: {
        FORCE_COLOR: '1',
        NODE_ENV: process.env.NODE_ENV ?? 'development',
      },
    },
    {
      name: 'Post css',
      script: 'npm run watch:css',
      watch: ['styles/postcss'],
      autorestart: false,
      env: {
        NODE_ENV: process.env.NODE_ENV ?? 'development',
        FORCE_COLOR: '1',
      },
    },
  ],
}
