const { merge } = require('webpack-merge');
const common = require('./webpack.common.ts');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './src/assets/loader.php', to: './' },
            ],
        }),
    ],
});
