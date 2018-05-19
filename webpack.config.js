const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');

// const dotenv = require('dotenv').config({path: path.resolve(__dirname, 'config', '.env')});
const isProduction = false; // Set manually as example but I use process.env.NODE_ENV


// if (dotenv.error) {
//     throw dotenv.error
// }

module.exports = {
    mode: isProduction ? 'production' : 'development',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: !isProduction
            }),
            new OptimizeCSSAssetsPlugin({sourceMap: !isProduction, url: false})
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: [".js", ".json", ".vue"]
    },
    entry: {
        App: './src/js/app.js'
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(vue)$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        cssSourceMap: !isProduction,
                        cacheBusting: true,
                        transformToRequire: {
                            video: ['src', 'poster'],
                            source: 'src',
                            img: 'src',
                            image: 'xlink:href'
                        }
                    }
                }]
            },
            {
                test: /\.(js)$/,
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['env'] }
                }],
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "style.css"}),
        new VueLoaderPlugin()
    ]
};
