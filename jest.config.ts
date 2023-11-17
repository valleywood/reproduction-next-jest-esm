import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest/setup/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  testMatch: ['<rootDir>/**/__tests__/**/*.test.{js,ts,tsx}'],
  testEnvironment: './jest/setup/jest-environment-jsdom.ts',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
};

module.exports = createJestConfig(customJestConfig);