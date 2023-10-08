import webpack from 'webpack';
import {StyleResources} from 'style-resources-loader';

const cssLoaderWithModule = {
    loader: 'css-loader',
    options: {
        modules: {
            localIdentName: '[local]__[hash:base64:5]',
            exportLocalsConvention: 'camelCase',
            exportGlobals: true
        }
    }
};

// 只支持scss样式文件的自动导入
const styleResourceOptions = {
    loader: 'style-resources-loader',
    options: {
        patterns: [],
        injector: (source: string, resources: StyleResources) => {
            // 项目中已存在import不再自动注入，避免重复，后面可逐步去除
            if (source.includes('@import')) {
                return source;
            }
            // 合并某一类样式，比如 mixin/vars，方便patterns中匹配文件夹下所有文件
            const combineResources = (type: string) =>
                resources
                    .filter(({file}) => file.includes(type))
                    .map(({content}) => content)
                    .join('');

            // 根据是否有@include判断是否使用mixin
            if (new RegExp(/@include\s+([a-zA-Z0-9-_]+)/g).test(source)) {
                return combineResources('vars') + combineResources('mixin') + source;
            } else if (new RegExp(/\$([a-zA-Z0-9-_]+)/g).test(source)) {
                // 根据 $ 判断是否使用sass变量
                return combineResources('vars') + source;
            }
            return source;
        }
    }
};

const sassLoader = {
    loader: 'sass-loader',
    options: {
        sourceMap: true
    }
};

const rule: webpack.RuleSetRule = {
    test: /\.(scss|sass)$/,
    oneOf: [
        {
            test: /\.module\.(scss|sass)$/,
            use: ['style-loader', cssLoaderWithModule, 'resolve-url-loader', sassLoader, styleResourceOptions]
        },
        {
            use: ['style-loader', 'css-loader', 'resolve-url-loader', sassLoader]
        }
    ]
};

export default rule;
