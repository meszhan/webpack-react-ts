import path from 'path';
import express from 'express';
import webpack from 'webpack';
import open from 'open';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackDevConfig from './config/webpack/webpack.config.dev';
import context from './lib/utils/context';

const compiler = webpack(webpackDevConfig);

const app = express();

const PORT: number = 8999;

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: webpackDevConfig.output!.publicPath as string
    })
);

app.use(
    // @ts-ignore
    webpackHotMiddleware(compiler, {
        log: false,
        path: '/__webpack_hmr'
    })
);

app.use('*', (_req, res) => {
    res.sendFile(path.join(context.projectRoot, 'views/index.html'));
});

app.listen(PORT, () => {
    console.info(`The React app is listening on port ${PORT}!\n`);
    void open(`http://localhost:${PORT}`);
});
