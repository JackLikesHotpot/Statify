import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Ensures the right environment for React tests
  setupFilesAfterEnv: ['./jest.setup.ts', './src/setupTests.ts'], // Loads setup file for additional configs
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Supports TypeScript and JavaScript
  moduleNameMapper: {
    '^@/(.*)$': './src/$1', 
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.test.json',  // Pointing to the specific tsconfig for testing
    }], 
  },
  collectCoverage: true, // Enables test coverage reporting
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/pages/**', // Exclude Next.js pages (optional)
    '!src/styles/**', // Exclude global styles
    '!src/types/**', // Exclude type definitions
  ],
};

export default config;
