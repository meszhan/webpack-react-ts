/**
 * 为了速度, ts-node对于类型的加载和使用异于常规typescript, 所以需要加triple-slash-reference
 *
 * @see {@link https://github.com/TypeStrong/ts-node#help-my-types-are-missing}
 */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference path="../../../global.d.ts" />

import webpack from 'webpack';
import merge from 'webpack-merge';

import outputDevConfig from './output.config.dev';
import webpackBasicConfig from './webpack.config.basic';

const devConfig = merge(
    webpackBasicConfig,
    {
        output: outputDevConfig
    },
    {
        mode: 'development',
        devtool: 'eval-source-map',
        entry: {
            main: [
                'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
            ]
        },
        module: {
            strictExportPresence: true
        },

        bail: false,

        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    }
);

export default devConfig;
