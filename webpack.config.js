const path = require('path');
const webpack =  require('webpack');

module.exports = {
    entry: {
        vendor: './src/vendor.js',
        main: './src/index.jsx',
    },
    output: {
        filename: '[name].js',
        chunkFilename: 'chunk.[id].js',
        path: path.resolve(__dirname, 'public/assets'),
        publicPath: '/assets',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    resolve: {
        extensions: [ '.', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity,
        }),
    ]
};
