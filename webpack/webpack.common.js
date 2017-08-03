const path = require('path');
const webpack = require('webpack');

const pj = require(path.join(__dirname,'../','package.json'));
const app = {
    name:pj.name[0].toUpperCase() + pj.name.slice(1),
    path:path.join(__dirname,'app')
};
module.exports = {
    entry:{
        app:path.resolve('source','app','app.js')
    },
    output:{
        filename:'[name].js',
        path:path.join(__dirname,'../','dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                include:path.join(__dirname,'../','source','app'),
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            'env'//https://babeljs.io/docs/plugins/preset-env/
                        ],
                        cacheDirectory:true
                    }
                }
            }
        ]
    },
    devServer:{
        port:3000,
        open:true,
        hot: true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
        // new webpack.optimize.UglifyJsPlugin({
        //
        // })
    ]
};