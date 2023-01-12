const path = require('path')
const htmlPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: '/client/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    // target: 'web',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          // use: 'babel-loader',
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
        template: '/index.html',
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 8080, 
      proxy: {
          '/api': {
            target: 'http://localhost:3000',
            pathRewrite: { '^/api': '' },
            changeOrigin: true,
            // router: () => 'http://localhost:8080'
        },    
      },
    },
    // devtool: 'eval-source-map',
  };