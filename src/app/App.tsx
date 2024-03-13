import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { SplitLayout, SplitCol, View } from '@vkontakte/vkui';
import { EstimatedAgePage } from '@/pages/EstimatedAgePage';
import { CatFactPage } from '@/pages/CatFactPage';
import { Home } from '@/pages/Home/Home.tsx';

import { DEFAULT_VIEW_PANELS } from './routes.ts';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } =
    useActiveVkuiLocation();

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
          <Home id="home" />
          <CatFactPage id="facts" />
          <EstimatedAgePage id="predictor" />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
