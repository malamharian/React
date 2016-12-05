var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    context: APP_DIR,
    devtool: debug ? "inline-source-map" : null,
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './js/client.js'
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel']
            }
        ]
    },
    output: {
        path: APP_DIR,
        filename: 'client.min.js'
    },
    plugins: debug ? 
        [
            new webpack.HotModuleReplacementPlugin()
        ] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        contentBase: './src'
    }
};