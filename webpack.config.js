const webpack = require('webpack');
const path = require('path');

//set client entry to index.js
const entry = [
    './client/index.js'
];

//set ouput to /build to build webpack-bundle.js
const output = {
    //setting the path to build
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'webpack-bundle.js',
};

// setting the entry, output, and rules for jsx/jx/css use babel-loader, convert es6/js/jsx/css so browser can understand it, minify. when its ready to build, built webpack-bundle.js file with all the converted files , breaking stuff down to be able to visually see as you're editing. 
module.exports = {
    mode: 'development',
    entry,
    output, 
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: /client/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env', 'babel-preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                ]
            }   
        ]
    }
}