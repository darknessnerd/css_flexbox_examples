const Path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: Path.resolve(__dirname, '../src/scripts/index.js'),
        gallery: Path.resolve(__dirname, '../src/scripts/gallery.js'),
        card: Path.resolve(__dirname, '../src/scripts/card.js'),
        panel: Path.resolve(__dirname, '../src/scripts/panel.js'),
        navbar: Path.resolve(__dirname, '../src/scripts/nav-bar.js'),
    },
    output: {
        path: Path.join(__dirname, '../build'),
        filename: 'js/[name].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: false
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {from: Path.resolve(__dirname, '../public'), to: 'public'}
        ]),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/index.html'),
            inject: true,
            chunks: ['app'],
            filename: 'index.html'
        })
        ,
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/gallery.html'),
            inject: true,
            chunks: ['gallery'],
            filename: 'gallery.html'
        })
        ,
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/card.html'),
            inject: true,
            chunks: ['card'],
            filename: 'card.html'
        })
        ,
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/panel.html'),
            inject: true,
            chunks: ['panel'],
            filename: 'panel.html'
        })
        ,
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/nav-bar.html'),
            inject: true,
            chunks: ['navbar'],
            filename: 'nav-bar.html'
        })
    ],
    resolve: {
        alias: {
            '~': Path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            },
        ]
    }
};
