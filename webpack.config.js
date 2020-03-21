const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'js/bundle.js',
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
            },
            {
                // 下载 url-loader file-loader
                test: /\.(png|jpg|gif)$/,
                // 只有一个loader 可以直接用loader 不用use
                loader: 'url-loader',
                options: {
                    // 小于8kb会用base64处理
                    limit: 8 * 1024,

                    // 给图片重命名
                    // 去hash值前10位 ext使用原来的扩展名
                    name: '[hash:10].[ext]',
                    // esModule为true时  html-loader会解析错误
                    esModule: false,

                    // 打包到images文件夹下
                    outputPath: 'images'
                },

            },

            {
                // 处理html文件中的img
                test: /\.html$/,
                loader: 'html-loader',


            },

            {
                // 打包其他资源(除css js html)
                exclude: /\.(css|scss|js|html|png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    // 打包到media文件夹下
                    outputPath: 'media'
                }

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
    mode: 'development',

    // 开发服务器
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        // contentBase: path.join(__dirname, "dist"),
        // 启动gzip压缩
        compress: true,
        port: 8000,
        // 自动打开浏览器
        open: true
    }
};
