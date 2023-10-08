module.exports = {
    root: true,
    extends: [
        '@ecomfe/eslint-config/strict',
        '@ecomfe/eslint-config/import/strict',
        '@ecomfe/eslint-config/react/strict',
        '@ecomfe/eslint-config/typescript/strict'
    ],
    ignorePatterns: [
        'node_modules',
        'output',
        'dist',
        '*.cjs',
        '*.mjs'
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts']
            }
        },
        'import/external-module-folders': ['node_modules', 'node_modules/@types']
    },
    // 覆盖掉bug规则和与百度规范不符的规则
    rules: {
        'no-use-before-define': 'off',
        'comma-dangle': [
            'error',
            {
                arrays: 'never',
                objects: 'never',
                imports: 'never',
                exports: 'never',
                functions: 'never'
            }
        ],
        'func-names': ['warn', 'as-needed'],
        '@typescript-eslint/no-namespace': 'off',
        /**
         * @see {@link https://github.com/import-js/eslint-plugin-import/blob/main/config/typescript.js}
         */
        'import/named': 'off',
        'no-underscore-dangle': 'off'
    }
};
