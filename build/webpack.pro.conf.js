/* eslint-disable no-undef */
const path = require('path'),
    fs = require('fs'),
    packageConf = JSON.parse(fs.readFileSync('./package.json', 'utf-8')),
    merge = require('webpack-merge'),
    webpackBaseConfig = require('./webpack.base.conf.js');


let version = packageConf.version,
    library = packageConf.name.toUpperCase();

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: `${library}-${version}.js`,
        library: 'moeui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    }
});
