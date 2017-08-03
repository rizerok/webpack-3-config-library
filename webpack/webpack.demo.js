const path = require('path');

module.exports = {
    entry:{
        demo1:'./source/app/app.js',
    },
    output:{
        filename:'[name]/index.js',
        path:path.join(__dirname,'../','demo')
    }

};