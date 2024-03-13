import { useFetchAgePrediction } from '@/features/serverResponse/getAge/index.ts';
import { SubmitHandler, Controller, useForm } from 'react-hook-form';
import { Age } from '@/entities/serverResponse/ui/Age/Age.tsx';
import { Form } from '@/entities/userRequest/index.ts';
import { useLoading } from '@/shared/context/index.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormItem, Input } from '@vkontakte/vkui';
import { useEffect, useState } from 'react';
import plural from 'plural-ru';

import { IFormInput, AgeData } from './model/interfaces.ts';
import { schema } from './model/schema.ts';

export function EstimatedAgeWidget() {
  const {
    formState: { isValid, errors },
    handleSubmit,
    control,
  } = useForm<IFormInput>({
    defaultValues: {
      name: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const [age, setAge] = useState<string | null>(null);
  const [timerId, setTimerId] = useState<number | null>(null);
  const [lastQueriedName, setLastQueriedName] = useState('');
  const { performFetch, isPending } = useFetchAgePrediction();
  const { setRepeatedRequest, setLoadingStatus } = useLoading();

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (timerId) clearTimeout(timerId);
    setAge(null);

    const newTimerId = window.setTimeout(() => {
      if (!isValid || !value.trim()) {
        return;
      }

      if (value.trim().toLowerCase() === lastQueriedName.toLowerCase()) {
        setRepeatedRequest(true);
        return;
      }

      performFetch(
        value,
        (response) => {
          const data = response.data as AgeData;
          setAge(data.age.toString());
        },
        () => {
          setLoadingStatus('error');
        }
      );
      setLastQueriedName(value);
    }, 3000);

    setTimerId(newTimerId);
  };

  const onSubmit: SubmitHandler<IFormInput> = ({ name }) => {
    if (timerId) clearTimeout(timerId);

    if (name.trim().toLowerCase() === lastQueriedName.toLowerCase()) {
      setRepeatedRequest(true);
      return;
    }

    performFetch(
      name,
      (response) => {
        const data = response.data as AgeData;
        setAge(data.age.toString());
      },
      () => {
        setLoadingStatus('error');
      }
    );
    setLastQueriedName(name);
  };

  useEffect(() => {
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [timerId]);

  return (
    <Form
      buttonText={`${isPending ? 'Загрузка...' : 'Узнать'} `}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormItem
        status={errors.name ? 'error' : 'default'}
        top="Введи имя и узнай возраст"
        bottom={errors.name?.message}
        bottomId="input-type"
        htmlFor="name"
      >
        <Controller
          render={({ field: { ref, ...restField } }) => (
            <Input
              aria-labelledby="input-type"
              placeholder="Имя"
              getRef={ref}
              type="text"
              id="name"
              {...restField}
              onChange={(e) => {
                restField.onChange(e);
                handleChange(e);
              }}
            />
          )}
          control={control}
          name="name"
        />
      </FormItem>
      <Age
        age={age ? `${age} ${plural(Number(age), 'год', 'года', 'лет')}` : ''}
      />
    </Form>
  );
}
