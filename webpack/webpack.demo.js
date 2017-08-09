const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let extractStylus = new ExtractTextPlugin({
    filename:'[name]/compiled/style.css'
});
let config = {
    entry:{

    },
    output:{
        filename:'[name]/compiled/index.js',
        path:path.join(__dirname,'../','demo','handled')
    },
    resolve:{
        alias:{

        }
    },
    devtool:'cheap-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname,'../','demo','handled'),
        openPage:'demo1/compiled',
        watchContentBase: true
    },
    module:{
        rules:[
            {
                test:/\.styl$/,
                use:extractStylus.extract({
                    fallback: "style-loader",
                    use:[{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader:'postcss-loader'
                    },
                    {
                        loader:'stylus-loader'
                    }]
                })
            }
        ]
    },
    plugins:[
        new HtmlWebpackHarddiskPlugin(),
        extractStylus
    ]
};

//read demo folders
const demo = fs.readdirSync(path.join(__dirname,'../','demo','handled'));
console.log('demo',demo);
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
    config.resolve.alias[name] = path.join(__dirname,'../','demo','handled',name,'source');
});

let cwp = new CleanWebpackPlugin(cwpPaths,{
    root:     path.join(__dirname,'../','demo','handled'),
    verbose:  true
});

config.plugins.unshift(cwp);

module.exports = config;