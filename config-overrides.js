const { resolve } = require('path');

module.exports = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': resolve(__dirname, './src/'),
    };

    return config;
  },
  jest(config) {
    config = {
      ...config,
      moduleNameMapper: { '^~\\/(.*)$': '<rootDir>/src/$1' },
      coverageThreshold: {
        global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
        },
      },
      coveragePathIgnorePatterns: [
        '/src/routes/index.js',
        '/src/styles/',
        '/src/App.js',
        '/src/index.js',
      ],
    };

    return config;
  },
};
