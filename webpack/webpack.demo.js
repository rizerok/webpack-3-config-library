const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

// let extractStylus = new ExtractTextPlugin({
//     filename:'[name]/compiled/style.css'
// });
let config = {
    entry:{

    },
    output:{
        filename:'[name]/compiled/index.js',
        path:path.join(__dirname,'../','demo','handled')
    },
    devtool:'cheap-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname,'../','demo','handled'),
        openPage:'demo1/compiled',
        watchContentBase: true
    },
    plugins:[
        new HtmlWebpackHarddiskPlugin(),
        //extractStylus
    ]
};

//read demo folders
const demo = fs.readdirSync(path.join(__dirname,'../','demo','handled'));
//for CleanWebpackPlugin
let cwpPaths = [];
//gen
demo.forEach(name=>{
    config.entry[name] = path.resolve('demo','handled',name,'source','index');
    cwpPaths.push(path.join(name,'compiled'));
    config.plugins.unshift(
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            title:name,
            inject:false,
            template: path.join(__dirname,'../','demo','handled',name,'source','index.html.ejs'),
            filename:path.join(__dirname,'../','demo','handled',name,'compiled','index.html')
        }),
    );
});

let cwp = new CleanWebpackPlugin(cwpPaths,{
    root:     path.join(__dirname,'../','demo','handled'),
    verbose:  true
});

config.plugins.unshift(cwp);

module.exports = config;