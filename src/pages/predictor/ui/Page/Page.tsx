import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import {
  Button,
  Div,
  Group,
  Header,
  Panel,
  PanelHeader,
  PanelHeaderBack,
} from '@vkontakte/vkui';

export function PredictorPage({ id }: { id: string }) {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader>Узнай возраст по имени</PanelHeader>

      <Group header={<Header mode="secondary">Панель навигации</Header>}>
        <Div>
          <Button
            stretched
            size="l"
            mode="secondary"
            onClick={() => routeNavigator.back()}
          >
            Получить интересную цитату
          </Button>
        </Div>
      </Group>
    </Panel>
  );
}
