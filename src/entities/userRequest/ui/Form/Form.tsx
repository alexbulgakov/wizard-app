import { FormItem, Group, Button } from '@vkontakte/vkui';

export function Form({
  children,
  onSubmit,
  buttonText,
}: {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
}) {
  return (
    <Group>
      <form onSubmit={onSubmit}>
        {children}
        <FormItem>
          <Button size="l" stretched type="submit">
            {buttonText}
          </Button>
        </FormItem>
      </form>
    </Group>
  );
}
