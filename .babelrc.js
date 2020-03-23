module.exports = {
  env: {
    node: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-optional-chaining',
      ],
    },
    development: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: ['>1%', 'last 2 versions', 'not ie <=8'],
            },
          },
        ],
        '@babel/preset-react',
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-transform-runtime'
      ],
    },
  },
};
