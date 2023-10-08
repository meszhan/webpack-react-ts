import webpack from 'webpack';

const devMode: boolean = process.env.NODE_ENV !== 'production';

const oneOfRule: webpack.RuleSetRule['oneOf'] = [
    {
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
                options: {
                    cacheDirectory: devMode
                }
            }
        ]
    }
];

const rule: webpack.RuleSetRule = {
    test: /\.[tj]sx?$/,
    oneOf: oneOfRule
};

export default rule;
