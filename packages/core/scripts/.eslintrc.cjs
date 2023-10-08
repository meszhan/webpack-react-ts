module.exports = {
    parserOptions: {
        project: 'packages/core/tsconfig.json'
    },
    rules: {
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'import/no-commonjs': 'off',
        'import/no-dynamic-require': 'off',
        'global-require': 'off',
        'no-var-requires': 'off'
    }
};
