
const webpack = require("webpack");
const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = merge(commonConfig, {
    mode: "production",

    plugins: [
        new webpack.DefinePlugin({
            'process.env.CONTRACT_ADDRESS': JSON.stringify(process.env.CONTRACT_ADDRESS),
            'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
        }),
    ],

});