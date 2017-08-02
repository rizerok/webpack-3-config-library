const path = require('path');
const pj = require(path.join(__dirname,'../','package.json'));
//const dependencies = Object.keys(pj.dependencies);

const app = {
    name:pj.name[0].toUpperCase() + pj.name.slice(1),
    path:path.join(__dirname,'app')
};

//TODO check console path.resolve and path.join

module.exports = {
    entry:{
        app:'./source/app/app.js'
    },
    output:{
        filename:'[name].js',
        path:path.join(__dirname,'../','dist')
    }
};