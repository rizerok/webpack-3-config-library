const path = require('path');

module.exports = {
    entry:{
        index:path.resolve('dev','source','index.js')
    },
    output:{
        filename:'[name].js',
        path:path.join(__dirname,'../','dev')
    },
    devtool:'cheap-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname,'../','dev'),
        open:true,
        openPage:'',
        port:3000
    }
};