import webpack from 'webpack';

import context from '../../lib/utils/context';

import outputConfig from './output.config';
import resolveConfig from './resolve.config';
import optimizationConfig from './optimization.config';
import pluginConfig from './plugins.config';
import moduleConfig from './module.config';
import entryConfig from './entry.config';

const config: webpack.Configuration = {
    context: context.projectRoot,
    entry: entryConfig,
    output: outputConfig,
    resolve: resolveConfig,
    module: moduleConfig,
    plugins: pluginConfig,
    optimization: optimizationConfig
};

export default config;
