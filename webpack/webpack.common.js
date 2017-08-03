const path = require('path');
const webpack = require('webpack');

const pj = require(path.join(__dirname,'../','package.json'));
const app = {
    name:pj.name[0].toUpperCase() + pj.name.slice(1),
    path:path.join(__dirname,'app')
};
module.exports = {
    entry:{
        app:'./source/app/app.js'
    },
    output:{
        filename:'[name].js',
        path:path.join(__dirname,'../','dist')
    }
    // plugins:[
    //     new webpack.optimize.UglifyJsPlugin({
    //
    //     })
    // ]
};