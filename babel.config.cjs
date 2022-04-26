module.exports = {
  comments: false,
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: {
          node: '10',
        },
        corejs: '3.21',
      },
    ],
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};
