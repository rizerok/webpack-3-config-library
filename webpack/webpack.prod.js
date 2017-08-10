const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pj = require(path.resolve('package.json'));
const demo = fs.readdirSync(path.resolve('demo','handled'));

module.exports = {
    output:{
        library:'lib',
        libraryTarget:'umd'
    },
    devtool:'cheap-module-source-map',
    plugins:[
        new HtmlWebpackPlugin({
            inject:false,
            template: path.resolve('templates','README.md.ejs'),
            filename:path.resolve('README.md'),
            info:{
                name: pj.name,
                version: pj.version,
                description: pj.description,
                repository:pj.repository.url
            }
        }),
        new HtmlWebpackPlugin({
            inject:false,
            template: path.resolve('templates','.gitignore.ejs'),
            filename:path.resolve('.gitignore'),
            demo
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: true
            },
            comments: false
        })
    ]
};