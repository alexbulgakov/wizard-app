import { EstimatedAgeWidget } from '@/widgets/EstimatedAge/EstimatedAgeWidget.tsx';
import { PanelHeaderBack, PanelHeader, Snackbar, Panel } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Icon28ErrorCircleOutline } from '@vkontakte/icons';
import { useLoading } from '@/shared/context/index.ts';
import { useEffect, useState } from 'react';

export function EstimatedAgePage({ id }: { id: string }) {
  const routeNavigator = useRouteNavigator();
  const {
    setRepeatedRequest,
    setLoadingStatus,
    repeatedRequest,
    loadingStatus,
  } = useLoading();
  const [snackbar, setSnackbar] = useState<React.ReactNode>(null);

  const openError = ({ text }: { text: string }) => {
    if (snackbar) return;
    setSnackbar(
      <Snackbar
        before={
          <Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)" />
        }
        onClose={() => setSnackbar(null)}
      >
        {text}
      </Snackbar>
    );
  };

  useEffect(() => {
    if (loadingStatus === 'error') {
      openError({ text: 'Возникла ошибка при обработке запроса' });
      setLoadingStatus('pending');
    }
  }, [loadingStatus]);

  useEffect(() => {
    if (repeatedRequest) {
      openError({ text: 'Вы уже совершали запрос с таким именем' });
      setRepeatedRequest(false);
    }
  }, [repeatedRequest]);

  return (
    <Panel id={id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
      >
        Возраст имени
      </PanelHeader>
      <EstimatedAgeWidget />
      {snackbar}
    </Panel>
  );
}
