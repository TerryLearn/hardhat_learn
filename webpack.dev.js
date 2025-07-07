const dotenv = require("dotenv");
dotenv.config();

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
    mode: "development",

    plugins: [
        new webpack.DefinePlugin({
            'process.env.CONTRACT_ADDRESS': JSON.stringify(process.env.CONTRACT_ADDRESS),
            'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
        }),
    ],

    devServer: {
        historyApiFallback: true,
        port:8080,
        hot:true
    }
});