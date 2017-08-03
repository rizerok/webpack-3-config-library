const path = require('path');

module.exports = {
    entry:{
        demo1:path.resolve('demo','demo1','source','index'),
        demo2:path.resolve('demo','demo2','source','index')
    },
    output:{
        filename:'[name]/index.js',
        path:path.join(__dirname,'../','demo')
    },
    devtool:'cheap-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname,'../','demo'),
        openPage:'demo1'
    }
};