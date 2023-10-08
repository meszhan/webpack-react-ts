import webpack from 'webpack';

const config: NonNullable<webpack.Configuration['optimization']> = {
    splitChunks: {
        // 没有http2，优化也不好所以暂定最多一个页面只能发3个异步
        maxAsyncRequests: 3,
        cacheGroups: {
            common: {
                chunks: 'all',
                minChunks: 4,
                minSize: 20000,
                name: 'common'
            }
        }
    }
};

export default config;
