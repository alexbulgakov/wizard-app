import vkBridge, {
  parseURLSearchParamsForGetLaunchParams,
} from '@vkontakte/vk-bridge';
import {
  useAdaptivity,
  useAppearance,
  useInsets,
} from '@vkontakte/vk-bridge-react';
import { AdaptivityProvider, ConfigProvider, AppRoot } from '@vkontakte/vkui';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';
import '@vkontakte/vkui/dist/vkui.css';

import { transformVKBridgeAdaptivity } from '../shared/utils';
import { router } from './routes';
import { App } from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LoadingProvider } from '@/shared/context/index.ts';

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
      appearance={vkBridgeAppearance}
      platform={vk_platform === 'desktop_web' ? 'vkcom' : undefined}
      isWebView={vkBridge.isWebView()}
      hasCustomPanelHeaderAfter={true}
    >
      <AdaptivityProvider {...adaptivity}>
        <AppRoot mode="full" safeAreaInsets={vkBridgeInsets}>
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
