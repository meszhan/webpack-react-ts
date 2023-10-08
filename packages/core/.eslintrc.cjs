const path = require('path');

module.exports = {
    settings: {
        'import/resolver': {
            alias: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                map: [
                    ['components', path.resolve(__dirname, 'src/components')],
                    ['constants', path.resolve(__dirname, 'src/constants')],
                    ['modules', path.resolve(__dirname, 'src/modules')],
                    ['stores', path.resolve(__dirname, 'src/stores')],
                    ['utils', path.resolve(__dirname, 'src/utils')]
                ]
            },
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
            },
            webpack: {
                config: path.resolve(__dirname, 'scripts/config/webpack/webpack.config.dev.ts')
            }
        }
    }
};
