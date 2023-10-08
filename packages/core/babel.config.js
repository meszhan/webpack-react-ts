module.exports = {
    sourceType: 'unambiguous',
    plugins: [
        'babel-plugin-dev-expression',
        '@babel/plugin-transform-runtime',
        [
            '@babel/plugin-proposal-decorators',
            {
                version: 'legacy'
            }
        ],
        ['@babel/plugin-proposal-class-properties', {loose: false}],
        '@babel/plugin-proposal-export-default-from',
        [
            'babel-plugin-import',
            {
                libraryName: 'antd',
                style: false,
                libraryDirectory: 'lib'
            }
        ]
    ],
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                useBuiltIns: 'entry',
                corejs: '3.26',
                // mobx6要求使用decorator时，需要将class-properties设置为false, 直接将@babel/preset-env的loose属性打开
                // 将会导致其包含的所有插件的loose均为true，不合理，所以排除@babel/plugin-proposal-class-properties, 后面
                // 单独引入
                exclude: ['@babel/plugin-proposal-class-properties']
            }
        ],
        ['@babel/preset-react', {runtime: 'classic'}],
        [
            '@babel/preset-typescript',
            {
                isTSX: true,
                allExtensions: true,
                allowDeclareFields: true
            }
        ]
    ]
};
