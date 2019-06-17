const path = require('path');

module.exports = {
    entry: './docs/index.js',
    mode: 'none',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './docs/static')
    }
};
