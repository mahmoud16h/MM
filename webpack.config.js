var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : "./src/app.js",
    output : {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    module : {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
            { test: /\.scss/, exclude: /node_modules/, use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use:["css-loader", "sass-loader"]
            })}
        ]
    },
    plugins : [
        new HtmlWebpackPlugin(),
        new ExtractTextPlugin("app.css")
    ]
}