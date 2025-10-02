import { setWorldConstructor } from '@cucumber/cucumber';
import { WebWorld } from '@automation/web-automation-framework';

setWorldConstructor(WebWorld);