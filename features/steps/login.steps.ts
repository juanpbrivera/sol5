import { Given, When, Then } from '@cucumber/cucumber';
import type { WebWorld } from '@automation/web-automation-framework';

Given('abro la app', async function (this: WebWorld) {
  await this.gotoBase('/');
});

When('busco {string}', async function (this: WebWorld, term: string) {
  await this.typeByPlaceholder('Search', term, true);
});

Then('la url contiene {string}', async function (this: WebWorld, fragment: string) {
  await this.urlIncludes(fragment);
});
