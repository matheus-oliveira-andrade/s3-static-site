module.exports = {
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        '/blog': { page: '/blog' },
        '/2022/12/lorem-ipson': { page: '/2022/12/lorem-ipson' },
      }
    },
  }