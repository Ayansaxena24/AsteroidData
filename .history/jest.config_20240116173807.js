// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
  };

  // jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };