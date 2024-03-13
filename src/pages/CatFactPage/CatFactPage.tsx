import { PanelHeaderBack, PanelHeader, Snackbar, Panel } from '@vkontakte/vkui';
import { CatFactWidget } from '@/widgets/CatFact/CatFactWidget.tsx';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Icon28ErrorCircleOutline } from '@vkontakte/icons';
import { useLoading } from '@/shared/context/index.ts';
import { useEffect, useState } from 'react';

export function CatFactPage({ id }: { id: string }) {
  const routeNavigator = useRouteNavigator();
  const { setLoadingStatus, loadingStatus } = useLoading();
  const [snackbar, setSnackbar] = useState<React.ReactNode>(null);

  const openError = () => {
    if (snackbar) return;
    setSnackbar(
      <Snackbar
        before={
          <Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)" />
        }
        onClose={() => setSnackbar(null)}
      >
        Возникла ошибка при обработке запроса
      </Snackbar>
    );
  };

  useEffect(() => {
    if (loadingStatus === 'error') {
      openError();
      setLoadingStatus('pending');
    }
  }, [loadingStatus]);

  return (
    <Panel id={id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
      >
        Факты о котиках
      </PanelHeader>
      <CatFactWidget />
      {snackbar}
    </Panel>
  );
}
