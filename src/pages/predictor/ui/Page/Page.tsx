import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import {
  Button,
  Div,
  FormItem,
  Group,
  Header,
  Input,
  Panel,
  PanelHeader,
  Text,
} from '@vkontakte/vkui';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInput {
  name: string;
}

const schema = yup.object({
  name: yup
    .string()
    .required('Введи же имя!')
    .matches(
      /^[\p{L}]+$/u,
      'R2-D2, ты ли это? Если ты человек, то можно вводить только буквы =('
    ),
});

export function PredictorPage({ id }: { id: string }) {
  const routeNavigator = useRouteNavigator();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

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

      <Group>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormItem
            status={errors.name ? 'error' : 'default'}
            htmlFor="name"
            top="Введи имя и узнай возраст"
            bottom={errors.name?.message}
            bottomId="input-type"
          >
            <Controller
              name="name"
              control={control}
              render={({ field: { ref, ...restField } }) => (
                <Input
                  aria-labelledby="input-type"
                  id="name"
                  type="text"
                  getRef={ref}
                  // required
                  placeholder="Имя"
                  {...restField}
                />
              )}
            />
          </FormItem>
          <FormItem>
            <Div>
              <Text weight="1"> 25 </Text>
            </Div>
          </FormItem>
          <FormItem>
            <Button size="l" stretched type="submit">
              Узнать
            </Button>
          </FormItem>
        </form>
      </Group>
    </Panel>
  );
}
