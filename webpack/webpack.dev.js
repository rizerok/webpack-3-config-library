const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    entry:{
        index:path.resolve('dev','source','index.js')
    },
    output:{
        filename:'[name].js',
        path:path.join(__dirname,'../','dev','compiled')
    },
    devtool:'cheap-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname,'../','dev','compiled'),
        openPage:'',
        watchContentBase: true
    },
    plugins:[
        new CleanWebpackPlugin(
            ['compiled'],
            {
                root:     path.join(__dirname,'../','dev'),
                verbose:  true
            }
        ),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            title:'for library develop',
            inject:false,
            template: path.join(__dirname,'../','dev','source','index.html.ejs'),
            filename:path.join(__dirname,'../','dev','compiled','index.html')
        }),
        new HtmlWebpackHarddiskPlugin()
    ]
};