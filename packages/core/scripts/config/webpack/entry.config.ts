import path from 'path';

import webpack from 'webpack';

import context from '../../lib/utils/context';

const entryConfig: NonNullable<webpack.Configuration['entry']> = {
    main: [path.resolve(context.projectRoot, 'src/entry/index.tsx')]
};

export default entryConfig;
