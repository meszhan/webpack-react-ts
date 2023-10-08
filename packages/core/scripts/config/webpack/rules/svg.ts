import webpack from 'webpack';

const rule: webpack.RuleSetRule = {
    test: /\.svg$/,
    oneOf: [
        {
            use: '@svgr/webpack',
            issuer: /\.(jsx?|tsx?)$/,
            resourceQuery: {not: [/url/]}
        },
        {
            type: 'asset/resource',
            generator: {
                filename: 'static/svg/[name]_[hash:8][ext]'
            }
        }
    ]
};

export default rule;
