import webpack from 'webpack';

const rule: webpack.RuleSetRule = {
    test: /\.md$/,
    type: 'asset/source'
};

export default rule;
