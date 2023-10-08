import path from 'path';

import webpack from 'webpack';

import context from '../../lib/utils/context';

const config: Exclude<webpack.Configuration['output'], undefined> = {
    path: path.resolve(context.projectRoot, 'output'),
    publicPath: 'auto',
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].js'
};

export default config;
