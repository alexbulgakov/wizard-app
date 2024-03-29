import {
  createHashRouter,
  RoutesConfig,
  createPanel,
  createRoot,
  createView,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  PREDICTOR: 'predictor',
  FACTS: 'facts',
  HOME: 'home',
} as const;

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, '/', []),
      createPanel(
        DEFAULT_VIEW_PANELS.PREDICTOR,
        `/${DEFAULT_VIEW_PANELS.PREDICTOR}`,
        []
      ),
      createPanel(
        DEFAULT_VIEW_PANELS.FACTS,
        `/${DEFAULT_VIEW_PANELS.FACTS}`,
        []
      ),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
