module.exports = {
    'presets': [
        ['@babel/env', {
            'modules': false,
            'useBuiltIns': 'usage'
        }]
    ],
    'plugins': [
        '@babel/plugin-transform-modules-commonjs',
        "@babel/plugin-proposal-object-rest-spread",
        '@babel/plugin-syntax-dynamic-import'
    ]
};

