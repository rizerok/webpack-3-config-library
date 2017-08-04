const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

let config = {
    entry:{

    },
    output:{
        filename:'[name]/compiled/index.js',
        path:path.join(__dirname,'../','demo')
    },
    devtool:'cheap-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname,'../','demo'),
        openPage:'demo1/compiled',
        watchContentBase: true
    },
    plugins:[
        new HtmlWebpackHarddiskPlugin()
    ]
};
//demo config
const demo = require(path.join(__dirname,'../','demo','demo.config.json'));
//for CleanWebpackPlugin
let cwpPaths = [];
//gen
for(key in demo){
    config.entry[key] = path.resolve('demo',key,'source','index');
    cwpPaths.push(path.join(key,'compiled'));
    config.plugins.unshift(
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            title:key,
            inject:false,
            template: path.join(__dirname,'../','demo',key,'source','index.html.ejs'),
            filename:path.join(__dirname,'../','demo',key,'compiled','index.html')
        }),
    );
}

let cwp = new CleanWebpackPlugin(cwpPaths,{
    root:     path.join(__dirname,'../','demo'),
    verbose:  true
});

config.plugins.unshift(cwp);

module.exports = config;