import {sync as pkgdirSync} from 'pkg-dir';

class Context {
    /**
     * 项目路径， 参考package.json文件的位置
     */
    projectRoot: string = pkgdirSync() ?? '';

    /**
     * 当前构建是否是生产环境构建
     */
    isProdEnv: boolean = process.env.NODE_ENV === 'production';
}

export default new Context();
