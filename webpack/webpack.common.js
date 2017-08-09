const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const pj = require(path.join(__dirname,'../','package.json'));
const app = {
    name:pj.name[0].toUpperCase() + pj.name.slice(1)
    //path:path.join(__dirname,'app')
};
let extractStylus = new ExtractTextPlugin({
    filename:'[name].css'
});



module.exports = {
    entry:{
        lib:path.resolve('source','lib','lib.js')
    },
    output:{
        filename:'[name].js',
        path:path.join(__dirname,'../','dist')
    },
    resolve:{
        alias:{
            root:path.join(__dirname,'../'),
            dist:path.join(__dirname,'../','dist'),
            lib:path.join(__dirname,'../','source','lib'),
            style:path.join(__dirname,'../','source','style'),
            dev:path.join(__dirname,'../','dev','source')
        }
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                include:path.join(__dirname,'../','source','lib'),
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            'env'//https://babeljs.io/docs/plugins/preset-env/
                        ],
                        cacheDirectory:true
                    }
                }
            },
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
    devServer:{
        port:3000,
        open:true,
        hot: true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        extractStylus
    ]
};