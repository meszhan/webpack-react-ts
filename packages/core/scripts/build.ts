/* eslint-disable no-console */

/**
 * 为了速度, ts-node对于类型的加载和使用异于常规typescript, 所以需要加triple-slash-reference
 *
 * @see {@link https://github.com/TypeStrong/ts-node#help-my-types-are-missing}
 */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference path="../global.d.ts" />

import webpack from 'webpack';

import webpackProdConfig from './config/webpack/webpack.config.prod';

// 确实没有类型定义
const printBuildError = require('react-dev-utils/printBuildError');

const compiler = webpack(webpackProdConfig);
compiler.run((err, stats) => {
    if (err || !stats) {
        printBuildError(err);
        process.exit(1);
        return;
    }

    if (stats.hasErrors()) {
        console.log(stats.toString('errors-only'));
        process.exit(1);
    }
    if (stats.hasWarnings()) {
        console.log(stats.toString('errors-warnings'));
    }

    console.log(stats.toString({
        assets: false,
        colors: true
    }));
});
