/* eslint-disable no-undef */
const webpack = require('webpack'),
    path = require('path'),
    fs = require('fs'),
    packageConf = JSON.parse(fs.readFileSync('./package.json', 'utf-8')),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    merge = require('webpack-merge'),
    webpackBaseConfig = require('./webpack.base.conf.js');


let version = packageConf.version,
    library = packageConf.name.toUpperCase();

module.exports = merge(webpackBaseConfig, {

    entry: {
        main: './examples/main',
        vendors: ['vue', 'vue-router']
    },
    output: {
        filename: `${library}.js`,
        path: path.resolve(__dirname, '../examples/dist'),
        publicPath: '',
        chunkFilename: `${library}-${version}.chunk.js`
    },

    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../examples/dist/index.html'),
            template: path.join(__dirname, '../examples/index.html')
        }),
    ],
});