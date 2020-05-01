const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname,  dir)
}
module.exports = function override(config, env) {
    config.resolve.alias = {
        '@': resolve('./src'),
        "@views":resolve('./src/views'),
        "@assets":resolve('./src/assets'),
        "@components":resolve('./src/components'),
        "@store":resolve('./src/store'),
        "@router":resolve('./src/router'),
    }
    
    return config;
}