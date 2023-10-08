import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import LessPluginFunctions from 'less-plugin-functions';

const productionMode = process.env.NODE_ENV === 'production';

const lessOptions = {
    modifyVars: {
        'ant-prefix': 'ant'
    },
    javascriptEnabled: true,
    plugins: [new LessPluginFunctions({alwaysOverride: true})]
};

const styleResourceOptions = {
    loader: 'style-resources-loader',
    options: {
        patterns: [
            require.resolve('@osui/icloud-theme/dist/less-functions-overrides.less'),
            require.resolve('@osui/icloud-theme/dist/antd-vars-patch.less')
        ],
        injector: 'append'
    }
};

const rule: webpack.RuleSetRule = {
    test: /\.less$/,
    oneOf: [
        {
            test: /\.(module\.less)$/,
            use: [
                productionMode ? MiniCssExtractPlugin.loader : 'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[local]__[hash:base64:5]',
                            exportGlobals: true
                        }
                    }
                },
                {
                    loader: 'less-loader',
                    options: {
                        lessOptions
                    }
                },
                styleResourceOptions
            ]
        },
        {
            use: [
                productionMode ? MiniCssExtractPlugin.loader : 'style-loader',
                'css-loader',
                {
                    loader: 'less-loader',
                    options: {
                        lessOptions
                    }
                },
                styleResourceOptions
            ]
        }
    ]
};

export default rule;
