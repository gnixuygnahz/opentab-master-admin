/**
 * Created by anytime on 2017/3/11.
 */
var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: __dirname+'/page/main/src/entry.js',
    output: {
        path: __dirname+'/page/main',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {
                // 让webpack去验证文件是否是.js结尾将其转换
                test: /\.js$/,
                // 通过babel转换
                loader: 'babel-loader',
                // 不用转换的node_modules文件夹
                exclude: /node_modules/
            },{
                test: /\.vue$/,
                loader: 'vue-loader'
            },{
                test: /\.less$/,//正则匹配拓展名为···的文件
                include: path.join(__dirname, './src/css'),//需要被加载文件的路径
                loader: 'style-loader!css-loader!less-loader'
            },{
                test: /\.html$/,
                exclude: /node_modules/,//这个文件除外
                loader: 'html-loader'
            },{
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&minetype=application/font-woff'
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },{
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192' // 内联的base64的图片地址，图片要小于8k，直接的url的地址则不解析
            }

        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
}