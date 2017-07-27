/* eslint-disable no-undef */
const webpack = require('webpack'),
    path = require('path');

module.exports = {
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: 'vue-style-loader!css-loader',
                    scss: 'vue-style-loader!css-loader!sass-loader'
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
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'autoprefixer-loader'
            ]
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader?sourceMap'
            ]
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
