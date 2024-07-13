const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './public/index.js',
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: "svg-inline-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js)$/,
                use: "babel-loader",
            }
        ],
    },
    output : {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
    },
    plugins : [new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        inject: 'body',
    })],
    mode: process.env.NODE_ENV === "production" ? "production": "development",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Serve content from the 'dist' directory
        },
        compress: true, // Enable gzip compression
        port: 9000, // Specify the port number
        hot: true, // Enable hot module replacement
        open: true, // Automatically open the browser
        historyApiFallback: true, // Enable support for HTML5 history API based routing
    },
};