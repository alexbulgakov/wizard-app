import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import {
  Button,
  Div,
  Group,
  Header,
  Panel,
  PanelHeader,
} from '@vkontakte/vkui';

export function Home({ id }: { id: string }) {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader>Главная</PanelHeader>
      <Group header={<Header mode="secondary">Меню</Header>}>
        <Div>
          <Button
            stretched
            size="l"
            mode="secondary"
            onClick={() => routeNavigator.push('predictor')}
          >
            Возраст имени
          </Button>
        </Div>
        <Div>
          <Button
            stretched
            size="l"
            mode="secondary"
            onClick={() => routeNavigator.push('facts')}
          >
            Факты о котиках
          </Button>
        </Div>
      </Group>
    </Panel>
  );
}
