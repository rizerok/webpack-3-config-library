const path = require('path');

const pj = path.join(__dirname,'package.json');
//const dependencies = Object.keys(pj.dependencies);

const app = {
    name:pj.name[0].toUpperCase() + pj.name.slice(1),
    path:path.join(__dirname,'app')
};


module.exports = {
    entry:{
        
    },
    output:{
        filename:''
    }
};