import { useState, useEffect, ReactNode } from 'react';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol, ScreenSpinner } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { DEFAULT_VIEW_PANELS } from './routes.ts';
import { useLoading } from '@/shared/context/index.ts';
import { CatFactPage } from '@/pages/CatFactPage';
import { EstimatedAgePage } from '@/pages/EstimatedAgePage';
import { Home } from '@/pages/Home/Home.tsx';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } =
    useActiveVkuiLocation();
  const [fetchedUser, setUser] = useState<UserInfo | undefined>();
  const [popout, setPopout] = useState<ReactNode | null>(null);
  const { loadingStatus } = useLoading();
  const clearPopout = () => setPopout(null);
  // useEffect(() => {
  //   async function fetchData() {
  //     const user = await bridge.send('VKWebAppGetUserInfo');
  //     setUser(user);
  //     setPopout(null);
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    if (loadingStatus === 'success') {
      setPopout(<ScreenSpinner state="done">Успешно</ScreenSpinner>);
      setTimeout(clearPopout, 1000);
    }

    if (loadingStatus === 'loading') {
      setPopout(<ScreenSpinner state="loading" />);
    }

    if (loadingStatus === 'error') {
      setPopout(<ScreenSpinner state="error">Произошла ошибка</ScreenSpinner>);
      setTimeout(clearPopout, 1000);
    }
  }, [loadingStatus]);

  return (
    <SplitLayout popout={popout}>
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
