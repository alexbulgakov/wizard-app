import { useFetchCatFact } from '@/features/serverResponse/getCatFact/index.ts';
import { CatFact } from '@/entities/serverResponse/ui/CatFact/CatFact.tsx';
import { Form } from '@/entities/userRequest/index.ts';
import { useLoading } from '@/shared/context/index.ts';
import { useEffect, useState, useRef } from 'react';

import { CatFactResponse } from './model/interfaces.ts';

export function CatFactWidget() {
  const [fact, setFact] = useState('');
  const { mutate: fetchCatFact, isPending, error } = useFetchCatFact();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { setLoadingStatus } = useLoading();

  useEffect(() => {
    if (error) setLoadingStatus('error');
  }, [error]);

  useEffect(() => {
    const setCursorAfterFirstWord = () => {
      const textareaElement = textareaRef.current;
      if (textareaElement && fact) {
        const words = fact.match(/\b\w+\b/);
        if (words && words.length > 0) {
          const firstWord = words[0];
          const indexOfFirstWord = fact.indexOf(firstWord);
          const position = indexOfFirstWord + firstWord.length;

          textareaElement.focus();
          textareaElement.setSelectionRange(position, position);
        }
      }
    };

    if (fact) {
      setCursorAfterFirstWord();
    }
  }, [fact]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchCatFact(
      { queryParams: undefined },
      {
        onSuccess: (response) => {
          const data = response.data as CatFactResponse;
          setFact(data.fact);
        },
      }
    );
  };

  return (
    <Form
      buttonText={`${isPending ? 'Загрузка...' : 'Узнать'} `}
      onSubmit={handleSubmit}
    >
      <CatFact textareaRef={textareaRef} fact={fact} />
    </Form>
  );
}
