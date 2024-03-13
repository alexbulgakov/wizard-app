import * as yup from 'yup';

export const schema = yup.object({
  name: yup
    .string()
    .required('Поле не может быть пустым')
    .matches(/^[A-Za-z]+$/, 'Введите только имя на латинице'),
});
