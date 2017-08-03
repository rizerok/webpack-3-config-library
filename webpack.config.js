const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack/webpack.common');

module.exports = function(env) {
    const config = require(`./webpack/webpack.${env}.js`);
    
    return merge.strategy({
        entry:'replace'
    })(
        commonConfig,
        config
    );
};