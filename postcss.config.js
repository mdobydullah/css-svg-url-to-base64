const postcssSVG = require('postcss-svg');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
    plugins: [
        postcssSVG(),
        postcssPresetEnv(),
        require('cssnano')({
            preset: 'default',
        }),
    ],
};