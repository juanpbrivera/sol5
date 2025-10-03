// cucumber.cjs
module.exports = {
  default: {
    requireModule: ['ts-node/register/transpile-only'],
    require: [
      'support/world.ts',        // PRIMERO registra el World
      'support/hooks.ts',        // SEGUNDO los hooks  
      'features/steps/*.ts'      // TERCERO los steps
    ],
    format: ['progress'],
    parallel: 0
  }
};