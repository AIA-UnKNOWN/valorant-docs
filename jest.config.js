const { defaults } = require('jest-config');
const { resolve } = require('path');

const config = {
  verbose: true,
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'js', 'jsx', 'ts', 'tsx'
  ],
  testEnvironment: 'jsdom',
  testMatch: [
    "**/src/**/?(*.)+(spec|test).[jt]s?(x)"
  ],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    '\\.(css|scss)$': `${resolve(__dirname, 'src')}/__mocks__/styleMock.js`,
    '\\.(jpeg|jpg|png|gif)$': `${resolve(__dirname, 'src')}/__mocks__/imageMock.js`,
    '^@images(.*)$': `${resolve(__dirname)}/images$1`,
    '^@reducers(.*)$': `${resolve(__dirname, 'src')}/reducers$1`,
    '^@common(.*)$': `${resolve(__dirname, 'src')}/common$1`,
    '^@pages(.*)$': `${resolve(__dirname, 'src')}/pages$1`,
    '^@animations(.*)$': `${resolve(__dirname, 'src')}/animations$1`,
    '^@layouts(.*)$': `${resolve(__dirname, 'src')}/layouts$1`,
  }
};

module.exports = config;