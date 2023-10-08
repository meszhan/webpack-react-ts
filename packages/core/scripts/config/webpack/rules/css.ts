import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

const productionMode = process.env.NODE_ENV === 'production';
const rule: webpack.RuleSetRule = {
    test: /\.css$/,
    use: [
        productionMode ? MiniCssExtractPlugin.loader : 'style-loader',
        {
            loader: 'css-loader'
        }
    ]
};

export default rule;
