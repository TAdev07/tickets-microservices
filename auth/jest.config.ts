import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    setupFilesAfterEnv: ['./src/test/setup.ts'],
};

export default config;