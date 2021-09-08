const path = require("path")
const HWP = require("html-webpack-plugin")
const { ProvidePlugin } = require('webpack')

const root = path.resolve(__dirname, "src")
const buildPath = path.resolve(__dirname, "build")

/** @type {import("webpack-dev-server").Configuration} devServer */
const devServer = {
  open: true,
  port: 3000,
  compress: true,
  historyApiFallback: true,
}

/** @type {import("webpack").Configuration} config */
const config = {
  target: process.env.NODE_ENV === 'production' ? 'browserslist' : 'web',
  mode: process.env.NODE_ENV || 'development',
  entry : {
    main: `${root}/index.js`,
  },
  resolve: {
    alias: {
      blocks: `${root}/blocks`,
      components: `${root}/components`,
      context: `${root}/context`,
      ds: `${root}/ds`,
      hooks: `${root}/hooks`,
      pages: `${root}/pages`,
      templates: `${root}/templates`,
      utils: `${root}/utils`,
    }
  },
  output: {
    path: buildPath,
  },
  devServer,
  plugins: [
    new HWP({
      template: 'index.ejs',
      filename: 'index.html'
    }),
    new ProvidePlugin({
      React: 'react',
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  }
}

module.exports = config
