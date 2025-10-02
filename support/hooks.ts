import { setDefaultTimeout } from '@cucumber/cucumber';
import { TestHooks } from '@automation/web-automation-framework';

setDefaultTimeout(60_000);

// Registrar todos los hooks del framework
TestHooks.registerHooks();

