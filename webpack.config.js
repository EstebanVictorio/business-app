const path = require("path")
const HWP = require("html-webpack-plugin")
const { ProvidePlugin, DefinePlugin } = require('webpack')
const dotenv = require("dotenv")

dotenv.config({
  path: `./.env${process.env.NODE_ENV || ".development"}`
})

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
      api: `${root}/api`,
      blocks: `${root}/blocks`,
      components: `${root}/components`,
      context: `${root}/context`,
      ds: `${root}/ds`,
      hooks: `${root}/hooks`,
      i18n: `${root}/i18n`,
      pages: `${root}/pages`,
      store: `${root}/store`,
      templates: `${root}/templates`,
      utils: `${root}/utils`,
    }
  },
  output: {
    path: buildPath,
    publicPath: '/',
  },
  devServer,
  plugins: [
    new HWP({
      template: 'index.ejs',
      filename: 'index.html'
    }),
    new ProvidePlugin({
      React: 'react',
    }),
    new DefinePlugin({
      API_KEY: JSON.stringify(process.env.API_KEY),
      BASE_API_URL: JSON.stringify(process.env.BASE_API_URL),
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
