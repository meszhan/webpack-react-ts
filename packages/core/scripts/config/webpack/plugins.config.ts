import path from 'path';

import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import HTMLWebpackHarddiskPlugin from 'html-webpack-harddisk-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
import MomentLocalesPlugin from 'moment-locales-webpack-plugin';

import context from '../../lib/utils/context';

const plugins: NonNullable<webpack.Configuration['plugins']> = [
    new HtmlWebpackPlugin({
        template: path.resolve(context.projectRoot, 'src/template.html'),
        alwaysWriteToDisk: true,
        scriptLoading: 'blocking'
    }),

    new HTMLWebpackHarddiskPlugin({
        outputPath: path.resolve(context.projectRoot, 'views')
    }),

    new MomentLocalesPlugin({
        localesToKeep: ['en', 'zh-cn']
    }),

    new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[chunkhash:8].css'
    }),

    new AntdDayjsWebpackPlugin()
];

export default plugins;
