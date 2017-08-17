/* eslint-disable no-undef */
const path = require('path'),
    fs = require('fs'),
    packageConf = JSON.parse(fs.readFileSync('./package.json', 'utf-8')),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    merge = require('webpack-merge'),
    webpackBaseConfig = require('./webpack.base.conf.js');


let version = packageConf.version,
    library = packageConf.name.toUpperCase();

const styleLoaders = [{
    test: /\.s[a|c]ss$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
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
        fallback: 'style-loader',
        use: [{
            loader: 'css-loader',
            options: {
                minimize: true
            }
        }]
    })
},];
webpackBaseConfig.module.rules = webpackBaseConfig.module.rules.concat(styleLoaders);
module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './examples/main',
        // vendors: ['vue', 'vue-router']
    },
    output: {
        filename: `${library}.js`,
        path: path.resolve(__dirname, '../docs'),
        publicPath: '',
        chunkFilename: `${library}-${version}.chunk.js`
    },

    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendors',
        //     filename: 'vendor.bundle.js'
        // }),
        new ExtractTextPlugin({
            filename: '[name].[contenthash:8].min.css'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../docs/index.html'),
            template: path.join(__dirname, '../examples/index.html')
        }),
    ],
});