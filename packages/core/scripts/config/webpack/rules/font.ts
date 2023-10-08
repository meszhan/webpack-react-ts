import webpack from 'webpack';

const rule: webpack.RuleSetRule = {
    test: /\.(woff|woff2|eot|ttf|otf)\??.*$/,
    type: 'asset/resource',
    generator: {
        filename: 'static/fonts/[name]_[hash:8][ext]'
    }
};

export default rule;
