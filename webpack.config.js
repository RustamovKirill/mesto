const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  
module.exports = {
    entry: { main: './src/script/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: ''
    },
    // добавили режим разработчика
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        compress: true,
        port: 8080, // порт, чтобы открывать сайт
        open: true // сайт будет открываться сам при запуске npm run dev
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                },
                exclude: '/node_modules/'
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                        loader: 'css-loader',
                        options: { 
                            importLoaders: 1 
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html' // путь к файлу index.html
        }),
        new CleanWebpackPlugin(), // вызываем плагиy
        new MiniCssExtractPlugin(),
    ]

}