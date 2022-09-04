import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testMatch: ['<rootDir>/__tests__/**/*.test.[jt]s'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};

export default config;
