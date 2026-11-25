const nextJest = require('next/jest');

// next/jest compiles TypeScript tests with the same SWC the build uses, so no Babel config is
// needed and the Next build keeps SWC.
const createJestConfig = nextJest({ dir: './' });

/** @type {import('jest').Config} */
module.exports = createJestConfig({
  testEnvironment: 'node',
  passWithNoTests: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
});
