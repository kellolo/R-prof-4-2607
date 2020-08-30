const path = require('path');
const MiniCss = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src', 'index.jsx')
    },
   
    resolve: {
        modules: [ `${__dirname}/src/components`, 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
    
    devtool: 'cheap-inline-module-source-map',
    
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
            fileName: path.join('style', '[name].css'),
            chunkFilename: '[id].css'
        }),
        new HtmlPlugin({
            fileName: 'index.html',
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    devServer: {
        port: 8080,
        // hot: true,
        open: false,        
        proxy: {
            "/api": {
                target: "http://localhost:3000/",
                pathRewrite: { "^/api": "" },
                secure: false,
                changeOrigin: true
            }
        }
    }
}