'use strict';

let path = require('path');
let srcPath = path.join(__dirname, '/../src/');

// Add needed plugins here
let defaultSettings = require('./defaults');

module.exports = {
    devtool: 'eval',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'istanbul-instrumenter-loader',
            include: [
                path.join(__dirname, '/../src')
            ],
            enforce: 'pre'
        }, {
            test: /\.(png|jpg|gif|woff|woff2|css|sass|scss|less|styl)$/,
            loader: 'null-loader'
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            include: [].concat(
                defaultSettings.additionalPaths, [
                    path.join(__dirname, '/../src'),
                    path.join(__dirname, '/../test')
                ]
            )
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            actions: srcPath + 'actions/',
            helpers: path.join(__dirname, '/../test/helpers'),
            components: srcPath + 'components/',
            sources: srcPath + 'sources/',
            stores: srcPath + 'stores/',
            styles: srcPath + 'styles/',
            config: srcPath + 'config/' + process.env.REACT_WEBPACK_ENV
        }
    }
};
