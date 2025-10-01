// support/hooks.ts
import { Before, After, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { WebWorld } from './world';

setDefaultTimeout(60_000);

Before(async function (this: WebWorld) {
  await this.init();
});

After(async function (this: WebWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    await this.screenshot(scenario.pickle.name.replace(/\s+/g, '_'));
  }
  await this.cleanup();
});