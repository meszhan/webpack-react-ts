import webpack from 'webpack';
import merge from 'webpack-merge';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import webpackBasicConfig from './webpack.config.basic';

const prodConfig: webpack.Configuration = merge(
    webpackBasicConfig,
    {
        mode: 'production',
        // 增加hidden-source-map, 方便op排查问题， 客户验收后去除
        // devtool: 'hidden-source-map',
        module: {
            strictExportPresence: false
        },

        output: {
            clean: true
        },

        // 在第一个错误出错时抛出，而不是无视错误
        bail: true,

        optimization: {
            minimizer: [
                '...',
                new CssMinimizerPlugin()
            ]
        }
    }
);

export default prodConfig;
