const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                // 用正则去匹配要用该 loader 转换的 CSS 文件
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                // 用正则去匹配要用该 loader 转换的 scss 文件
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [

        // html-webpack-plugin
        // 功能 创建一个空html 自动引入js css
        new HtmlWebpackPlugin({
            // 复制一个html文件 并自动引入js css
            template: './src/index.html'
        })

    ],
    mode: 'development'
};
