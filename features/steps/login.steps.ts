// features/steps/login.steps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { AutomatizacionWeb  } from '@automation/web-automation-framework';

Given('abro la app', async function (this: AutomatizacionWeb) {
  await this.abrirPaginaBase('/');
});

When('busco {string}', async function (this: AutomatizacionWeb, term: string) {
  await this.escribirPorPlaceholder('Search', term, true);
});

Then('la url contiene {string}', async function (this: AutomatizacionWeb, fragment: string) {
  await this.esperarUrlContenga(fragment);
});