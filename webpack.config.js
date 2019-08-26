const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: "bundle.js"
    },
    devServer: {
        open: true,
        port: 3000,
        // contentBase: 'src',
        hot: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|png|gif|bmp)/, use: 'url-loader?limit=10240' },
            { test: /\.(eot|svg|ttf|woff|woff2)/, use: 'url-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}
