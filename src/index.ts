import { defineConfigSchema, getAsyncLifecycle } from '@openmrs/esm-framework';
import { configSchema } from './config-schema';

const moduleName = '@openmrs/esm-clinical-views-builder';

const options = {
  featureName: 'content-packages-builder',
  moduleName,
};

export const importTranslation = require.context('../translations', true, /.json$/, 'lazy');

export const root = getAsyncLifecycle(() => import('./root.component'), options);

export const systemAdministrationClinicalViewsBuilderCardLink = getAsyncLifecycle(
  () => import('./content-packages-builder-admin-card-link.component'),
  options,
);

export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
}
