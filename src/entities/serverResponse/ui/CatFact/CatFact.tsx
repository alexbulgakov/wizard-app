import { FormItem, Textarea } from '@vkontakte/vkui';

export function CatFact({
  textareaRef,
  fact,
}: {
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  fact: string;
}) {
  return (
    <FormItem top="Нажми на кнопку, чтобы узнать котиков лучше">
      <Textarea
        placeholder="Здесь будет интересное о котиках"
        getRef={textareaRef}
        defaultValue={fact}
      />
    </FormItem>
  );
}
