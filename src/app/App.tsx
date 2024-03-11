import { useState, useEffect, ReactNode } from 'react';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol, ScreenSpinner } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { Persik, Home } from './panels';
import { DEFAULT_VIEW_PANELS } from './routes.ts';
import { FactsPage } from '../pages/facts/index.ts';
import { PredictorPage } from '../pages/predictor/index.ts';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.FACTS } =
    useActiveVkuiLocation();
  const [fetchedUser, setUser] = useState<UserInfo | undefined>();
  const [popout, setPopout] = useState<ReactNode | null>(
    <ScreenSpinner size="large" />
  );

  // useEffect(() => {
  //   async function fetchData() {
  //     const user = await bridge.send('VKWebAppGetUserInfo');
  //     setUser(user);
  //     setPopout(null);
  //   }
  //   fetchData();
  // }, []);

  return (
    // <SplitLayout popout={popout}>
    <SplitLayout>
      <SplitCol>
        <View activePanel={activePanel}>
          {/* <Home id="facts" fetchedUser={fetchedUser} /> */}
          {/* <Persik id="predictor" /> */}
          <FactsPage id="facts" />
          <PredictorPage id="predictor" />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
