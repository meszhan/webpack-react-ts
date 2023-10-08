import path from 'path';
import webpack from 'webpack';

const workPath = path.resolve(__dirname, '..', '..', '..');

const config: NonNullable<webpack.Configuration['resolve']> = {
    modules: ['node_modules'],
    //  补充js后缀，eslint-import-resolver-webpack无法识别webpack5 '...'语法，导致无法正确解析js文件路径的问题
    extensions: ['...', '.js', '.jsx', '.es6', '.ts', '.tsx'],
    alias: {
        'components': path.resolve(workPath, 'src/components'),
        'constants': path.resolve(workPath, 'src/constants'),
        'modules': path.resolve(workPath, 'src/modules'),
        'stores': path.resolve(workPath, 'src/stores'),
        'utils': path.resolve(workPath, 'src/utils'),
        'helpers': path.resolve(workPath, 'src/helpers'),
        '@osui/icons': '@osui/icons-icloud'
    }
};

export default config;
