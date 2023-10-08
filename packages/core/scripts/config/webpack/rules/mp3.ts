import webpack from 'webpack';

const rule: webpack.RuleSetRule = {
    test: /\.mp3$/,
    type: 'asset/resource',
    generator: {
        filename: 'static/media/[name].[ext]'
    }
};

export default rule;
