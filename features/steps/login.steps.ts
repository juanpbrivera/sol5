// features/steps/login.steps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { WebWorld } from '../../support/world';

Given('abro la app', async function (this: WebWorld) {
  await this.gotoBase('/');
});

When('busco {string}', async function (this: WebWorld, term: string) {
  await this.typeByPlaceholder('Search', term, true);
});

Then('la url contiene {string}', async function (this: WebWorld, fragment: string) {
  await this.urlIncludes(fragment);
});