const path = require('path')
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
        },
        {
          test: /.(css|scss)$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader", "sass-loader"],
      },
      ],
    },
    plugins: [
      new htmlPlugin({
        template: './index.html',
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 8081, 
      proxy: {
          '/api': {
            target: 'http://localhost:3000',
            pathRewrite: { '^/api': '' },
            changeOrigin: true,
        },    
      },
      historyApiFallback: true,
    },
    resolve: {
      fallback: {
        "fs": false
      },
      extensions: ['.js', '.jsx', '.react.js'],
    },
    devtool: 'eval-source-map',
  };