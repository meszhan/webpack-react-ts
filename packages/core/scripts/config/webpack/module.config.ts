import path from 'path';
import {sync as globSync} from 'glob';
import webpack from 'webpack';

const ruleFiles = globSync(path.resolve(__dirname, 'rules/*.ts'));

const config: NonNullable<webpack.Configuration['module']> = {
    rules: [
        ...ruleFiles.map(ruleFile => require(ruleFile).default)
    ]
};

export default config;
