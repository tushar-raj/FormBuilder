var path = require('path');

var config = {
    context: path.join(__dirname, 'src'),

    entry: [
        './main.js',
    ],

    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js',
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ],
    },

    debug: true,
    devtool: "#eval-source-map",

    resolveLoader: {
        root: [
            path.join(__dirname, 'node_modules'),
        ],
    },

    resolve: {
        root: [
            path.join(__dirname, 'node_modules'),
        ],
    },

};

module.exports = config;
