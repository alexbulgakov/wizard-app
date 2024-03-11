import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import {
  Button,
  Div,
  FormItem,
  FormLayoutGroup,
  Group,
  Header,
  Panel,
  PanelHeader,
  Textarea,
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

      <FormLayoutGroup>
        <FormItem top="Нажми на кнопку, чтобы получить интересный факт">
          <Textarea placeholder="Здесь будет важная информация" />
        </FormItem>
        <FormItem>
          <Button type="submit">Получить</Button>
        </FormItem>
      </FormLayoutGroup>
    </Panel>
  );
}
