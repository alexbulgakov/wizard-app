import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { SplitLayout, SplitCol, View } from '@vkontakte/vkui';
import { EstimatedAgePage } from '@/pages/EstimatedAgePage';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { CatFactPage } from '@/pages/CatFactPage';
import { Home } from '@/pages/Home/Home.tsx';
import { useEffect, useState } from 'react';

import { DEFAULT_VIEW_PANELS } from './routes.ts';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } =
    useActiveVkuiLocation();
  const [fetchedUser, setUser] = useState<undefined | UserInfo>();

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      console.log(user);
    }
    fetchData();
  }, []);

  return (
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
          <Home fetchedUser={fetchedUser} id="home" />
          <CatFactPage id="facts" />
          <EstimatedAgePage id="predictor" />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
