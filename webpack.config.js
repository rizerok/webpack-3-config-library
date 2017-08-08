const merge = require('webpack-merge');
const path = require('path');

const configCommon = require('./webpack/webpack.common');

let configComplete = function (env) {
    const config = require(`./webpack/webpack.${env}.js`);
    let complete =  merge(
        {
            customizeArray(a, b, key) {
                console.log('arr key',key);
                if(key === 'module.rules'){
                    for(let i=0;i<a.length;i++){
                        for(let j=0;j<b.length;j++){
                            if(String(a[i].test)===String(b[j].test)){//compare by regexp
                                a[i] = b[j];
                                return a;
                            }
                        }
                    }
                }
                // Fall back to default merging
                return undefined;
            },
            customizeObject(a, b, key) {
                if (key === 'entry') {
                    return b;
                }
                // Fall back to default merging
                return undefined;
            }
        }
    )(configCommon,config);
    console.log(complete);
    return complete;
};

module.exports = configComplete;