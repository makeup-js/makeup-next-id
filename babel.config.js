module.exports = {
    presets: [
        [
            '@babel/preset-env', {
                corejs: 3
            }
        ]
    ],
    plugins: ['transform-object-assign']
};
