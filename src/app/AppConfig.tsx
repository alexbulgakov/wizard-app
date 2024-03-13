import {
  useAdaptivity,
  useAppearance,
  useInsets,
} from '@vkontakte/vk-bridge-react';
import vkBridge, {
  parseURLSearchParamsForGetLaunchParams,
} from '@vkontakte/vk-bridge';
import { AdaptivityProvider, ConfigProvider, AppRoot } from '@vkontakte/vkui';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';
import { LoadingProvider } from '@/shared/context/index.ts';
import '@vkontakte/vkui/dist/vkui.css';

import { transformVKBridgeAdaptivity } from '../shared/utils';
import { router } from './routes';
import { App } from './App';

export const AppConfig = () => {
  const vkBridgeAppearance = useAppearance() || undefined;
  const vkBridgeInsets = useInsets() || undefined;
  const adaptivity = transformVKBridgeAdaptivity(useAdaptivity());
  const { vk_platform } = parseURLSearchParamsForGetLaunchParams(
    window.location.search
  );
  const queryClient = new QueryClient();

  return (
    <ConfigProvider
      platform={vk_platform === 'desktop_web' ? 'vkcom' : undefined}
      isWebView={vkBridge.isWebView()}
      hasCustomPanelHeaderAfter={true}
      appearance={vkBridgeAppearance}
    >
      <AdaptivityProvider {...adaptivity}>
        <AppRoot safeAreaInsets={vkBridgeInsets} mode="full">
          <RouterProvider router={router}>
            <QueryClientProvider client={queryClient}>
              <LoadingProvider>
                <App />
              </LoadingProvider>
            </QueryClientProvider>
          </RouterProvider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
