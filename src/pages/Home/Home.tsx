import {
  PanelHeader,
  Button,
  Header,
  Avatar,
  Group,
  Panel,
  Cell,
  Div,
} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { UserInfo } from '@vkontakte/vk-bridge';

export function Home({
  fetchedUser,
  id,
}: {
  fetchedUser?: UserInfo;
  id: string;
}) {
  const routeNavigator = useRouteNavigator();
  const { first_name, photo_200, last_name, city } = { ...fetchedUser };

  return (
    <Panel id={id}>
      <PanelHeader>Главная</PanelHeader>
      {fetchedUser && (
        <Group header={<Header mode="secondary">Привет</Header>}>
          <Cell
            before={photo_200 && <Avatar src={photo_200} />}
            subtitle={city?.title}
          >
            {`${first_name} ${last_name}`}
          </Cell>
        </Group>
      )}

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
