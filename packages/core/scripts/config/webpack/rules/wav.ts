import webpack from 'webpack';

const rule: webpack.RuleSetRule = {
    test: /\.wav$/,
    type: 'asset/resource',
    generator: {
        filename: 'static/media/[name].[ext]'
    }
};

export default rule;
