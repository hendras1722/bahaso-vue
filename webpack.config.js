module.exports = {
  module: {
    rules: [
      {
        test: /\.styl/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "stylus-loader",
            options: {
              webpackImporter: false,
            },
          },
        ],
      },
    ],
  },
};