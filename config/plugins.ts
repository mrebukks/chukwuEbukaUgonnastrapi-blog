module.exports = {
  'rest-cache': {
    config: {
      provider: {
        name: 'memory', // No extra setup needed for this
      },
      strategy: {
        contentTypes: [
          'api::article.article', // Replace with your actual Content Type UID
        ],
      },
    },
  },
};
