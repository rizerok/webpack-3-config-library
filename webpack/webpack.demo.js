const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
    entry:{
        demo1:path.resolve('demo','demo1','source','index'),
        demo2:path.resolve('demo','demo2','source','index')
    },
    output:{
        filename:'[name]//index.js',
        path:path.join(__dirname,'../','demo')
    },
    devtool:'cheap-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname,'../','demo'),
        openPage:'demo1/compiled',
        watchContentBase: true
    },
    plugins:[
        new CleanWebpackPlugin(
            [
                path.join('demo1','compiled'),
                path.join('demo2','compiled')
            ],
            {
                root:     path.join(__dirname,'../','demo'),
                verbose:  true
            }
        ),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            title:'demo1',
            inject:false,
            template: path.join(__dirname,'../','demo','demo1','source','index.html.ejs'),
            filename:path.join(__dirname,'../','demo','demo1','compiled','index.html')
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            title:'demo2',
            inject:false,
            template: path.join(__dirname,'../','demo','demo2','source','index.html.ejs'),
            filename:path.join(__dirname,'../','demo','demo2','compiled','index.html')
        }),
        new HtmlWebpackHarddiskPlugin()
    ]
};