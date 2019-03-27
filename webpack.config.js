const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app/index.tsx',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // {
            //     test: /(\.css)$/,
            //     use: [
            //         'style-loader',
            //         'typings-for-css-modules-loader?modules&namedExport&camelCase&localIdentName=[local]-[hash:base64:16]',
            //         'css-loader',
            //     ]
            // },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'typings-for-css-modules-loader?modules&namedExport&camelCase&localIdentName=[local]-[hash:base64:16]',
                    'less-loader',
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development'
        })
    ],
};
