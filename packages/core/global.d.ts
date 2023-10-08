import 'process';

declare module '*.json';

declare global {
    const PLATFORM_ENV: 'development' | 'sandbox' | 'production';
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: string | undefined;
            NODE_ENV: 'development' | 'production';
            PLATFORM_ENV: 'development' | 'sandbox' | 'production';
        }
    }
}
