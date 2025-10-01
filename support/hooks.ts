// support/hooks.ts
import { Before, After, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { WebWorld } from './world';

setDefaultTimeout(60_000);

Before(async function (this: WebWorld) {
  await this.init();
});

After(async function (this: WebWorld, scenario) {
  // Solo intenta screenshot si la página existe
  if (scenario.result?.status === Status.FAILED && this.page) {
    await this.screenshot(scenario.pickle.name.replace(/\s+/g, '_'));
  }
  
  // Solo limpia si el browser existe
  if (this.browser) {
    await this.cleanup();
  }
});