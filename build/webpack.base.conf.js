/* eslint-disable no-undef */
const webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path = require('path');

module.exports = {
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    module: {
        rules: [{
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        use: 'css-loader',
                        fallback: 'vue-style-loader'
                    }),
                    scss: ExtractTextPlugin.extract({
                        use: ['css-loader', 'sass-loader'],
                        fallback: 'vue-style-loader'
                    })
                },
                postLoaders: {
                    html: 'babel-loader'
                }
            }
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?cacheDirectory'
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, '../src')
        }
    }
};