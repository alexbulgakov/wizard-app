import {
  PanelHeader,
  Button,
  Header,
  Group,
  Panel,
  Div,
} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export function Home({ id }: { id: string }) {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader>Главная</PanelHeader>
      <Group header={<Header mode="secondary">Меню</Header>}>
        <Div>
          <Button
            onClick={() => routeNavigator.push('predictor')}
            mode="secondary"
            stretched
            size="l"
          >
            Возраст имени
          </Button>
        </Div>
        <Div>
          <Button
            onClick={() => routeNavigator.push('facts')}
            mode="secondary"
            stretched
            size="l"
          >
            Факты о котиках
          </Button>
        </Div>
      </Group>
    </Panel>
  );
}
