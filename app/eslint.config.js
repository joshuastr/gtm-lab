import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        files: ['src/**/*.js'],
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: 'module',
            globals: { document: 'readonly', window: 'readonly', fetch: 'readonly', console: 'readonly' },
        },
    },
    {
        // the build-data generator runs in Node
        files: ['scripts/**/*.{js,mjs}'],
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: 'module',
            globals: { console: 'readonly', process: 'readonly' },
        },
    },
];
