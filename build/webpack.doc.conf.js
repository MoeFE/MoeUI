/* eslint-disable no-undef */
const path = require('path'),
    fs = require('fs'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    packageConf = JSON.parse(fs.readFileSync('./package.json', 'utf-8')),
    merge = require('webpack-merge'),
    webpackBaseConfig = require('./webpack.base.conf.js');

let version = packageConf.version,
    library = packageConf.name.toUpperCase();

process.env.NODE_ENV = 'production';

const styleLoaders = [{
    test: /\.s[a|c]ss$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract({
        use: [{
            loader: 'css-loader',
            options: {
                minimize: true
            }
        }, {
            loader: 'sass-loader?sourceMap'
        }]
    })
}, {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
        use: [{
            loader: 'css-loader',
            options: {
                minimize: true
            }
        }]
    })
}];
webpackBaseConfig.module.rules = webpackBaseConfig.module.rules.concat(styleLoaders);
module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './examples/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
        filename: `${library}-doc-${version}.js`,
        library: 'moeui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../dist/index.html'),
            template: path.join(__dirname, '../examples/index.html')
        }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:8].min.css'
        })
    ],
});