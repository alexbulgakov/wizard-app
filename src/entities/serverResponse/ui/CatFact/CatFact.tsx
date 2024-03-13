import { FormItem, Textarea } from '@vkontakte/vkui';

export function CatFact({
  fact,
  textareaRef,
}: {
  fact: string;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
}) {
  return (
    <FormItem top="Нажми на кнопку, чтобы узнать котиков лучше">
      <Textarea
        placeholder="Здесь будет интересное о котиках"
        value={fact}
        getRef={textareaRef}
      />
    </FormItem>
  );
}
