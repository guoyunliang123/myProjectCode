const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    // 入口项配置
    entry: {
        entry: './src/index.js'
    },
    // 出口项配置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    // 模块：例如解读css，图片如何转换，压缩
    module: {
        rules: [{
            test: /\.css$/,
            // use: ['style-loader', 'css-loader']
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }, {
            test: /\.(png|jpg|gif)/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 500,
                    outputPath: 'images/'
                }
            }]
        }, {
            test: /\.(html|htm)$/i,
            loader: 'html-withimg-loader'
        }]
    },
    // 插件，用于生产模板和各项功能
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: "./src/index.html",
        }),
        new ExtractTextPlugin("css/index.css"),
        // new UglifyJsPlugin(),
    ],
    // 配置webpack开发服务功能
    devServer: {
        // 设置基本目录结构
        contentBase: path.resolve(__dirname, 'dist'),
        // 服务器的IP地址，可以使用IP也可以使用localhost
        host: '127.0.0.1',
        // 服务器压缩是否开启
        compress: true,
        // 配置服务端口号
        port: 1111
    }
}