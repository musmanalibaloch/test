var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
        },
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        },
        {
            test: /\.html?$/,
            exclude: /node_modules/,
            use: 'html-loader',
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: 'file-loader?name=images/[name].[ext]'
        }
        ]
    },
    entry: {
        index: './src/components/index.jsx'
    },
    output: {
        filename: '[name].js',
        chunkFilename: "[name].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ]
}