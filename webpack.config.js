const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
})

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: "style-loader" // creates style nodes from JS strings
                  },
                  {
                    loader: "css-loader" // translates CSS into CommonJS
                  },
                  {
                    loader: "sass-loader" // compiles Sass to CSS
                  }
                ]
              }
        ]
    },
    plugins: [htmlPlugin]
}