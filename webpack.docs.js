const path = require('path');

module.exports = {
    entry: './docs/_babel/index.js',
    mode: 'none',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './docs/dist')
    }
};
