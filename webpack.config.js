const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: {
        "reactivity": "./src/reactivity/index.jsx",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        clean: true
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
    },
    devtool: "inline-cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.module\.less$/,
                use: [
                    "style-loader",
                    getCssLoader({
                        sourceMap: true,
                        modules: {
                            mode: "local",
                            localIdentName: "[local]___[hash:base64:5]",
                            exportLocalsConvention: "dashes"
                        }
                    }),
                    "less-loader"
                ]
            },
            {
                test: /\.less$/,
                exclude: /\.module\.less$/,
                use: [
                    "style-loader",
                    getCssLoader(),
                    "less-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    getCssLoader(),
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Reactivity in Js",
            template: './src/reactivity/index.ejs',
        }),
        new CopyPlugin({
            patterns: [{ from: "public", to: "" }, "favicon.png", "apple-touch-icon.png" ]
        }),
    ]
}

function getCssLoader(extraOptions = {}){
    return {
        loader: "css-loader",
        options: {
            ...extraOptions
        },
    }
}
