/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;
const additionalPaths = [];

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
    return {
        rules: [{
            test: /\.(js|jsx)$/,
            include: [srcPath],
            enforce: 'pre',
            loader: 'eslint-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.sass/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader',
                options: {
                    outputStyle: 'expanded',
                    indentedSyntax: true
                }
            }]
        }, {
            test: /\.scss/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader',
                options: {
                    outputStyle: 'expanded'
                }
            }]
        }, {
            test: /\.less/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'less-loader'
            }]
        }, {
            test: /\.styl/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'stylus-loader'
            }]
        }, {
            test: /\.(png|jpg|gif|woff|woff2|eot|ttf)$/,
            loader: 'url-loader',
            options: {
                limit: 8192
            }
        }, {
            test: /\.(mp4|ogg|svg)$/,
            loader: 'file-loader'
        }]
    }
}


module.exports = {
    srcPath: srcPath,
    publicPath: '/assets/',
    port: dfltPort,
    getDefaultModules: getDefaultModules,
    additionalPaths: additionalPaths
};
