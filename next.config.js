module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'pages/api'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },

}
