import { FormItem, Text } from '@vkontakte/vkui';

export function Age({ age }: { age: string }) {
  return (
    <FormItem>
      <Text>Предполагаемый возраст: {age}</Text>
    </FormItem>
  );
}
