var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : "./src/index.js",
    output : {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module : {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
            { test: /\.sass/, exclude: /node_modules/, use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use:["css-loader", "sass-loader"]
            })}
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
          title: "MM",
          template: 'src/index.html'
        }),
        new ExtractTextPlugin("app.css")
    ]
}
