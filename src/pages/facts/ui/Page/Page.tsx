import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import {
  Button,
  Div,
  Group,
  Header,
  Panel,
  PanelHeader,
} from '@vkontakte/vkui';

export function FactsPage({ id }: { id: string }) {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader>Генератор интересных фактов</PanelHeader>

      <Group header={<Header mode="secondary">Панель навигации</Header>}>
        <Div>
          <Button
            stretched
            size="l"
            mode="secondary"
            onClick={() => routeNavigator.push('predictor')}
          >
            Узнать возраст
          </Button>
        </Div>
      </Group>
    </Panel>
  );
}
