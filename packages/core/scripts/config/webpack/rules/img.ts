import webpack from 'webpack';

const rule: webpack.RuleSetRule = {
    test: /\.(png|gif|jpe?g)$/,
    type: 'asset/resource',
    generator: {
        filename: 'static/img/[name].[hash:8][ext]'
    }
};

export default rule;
