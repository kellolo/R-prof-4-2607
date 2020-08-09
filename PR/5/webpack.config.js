const path = require('path');
const MiniCss = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        //точка входа
        main: path.resolve(__dirname, 'src', 'index.jsx')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        ["@babel/plugin-proposal-class-properties", {"loose": true}]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [MiniCss.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCss({
            filename: path.join('style', '[name].css'),
            chunkFilename: '[id].css'
        }),
        new HtmlPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    devServer: {
        port: 3000,
        // hot: true,
        open: false
    }
}