import * as yup from "yup";
export const signInSchema = yup.object().shape({
    email: yup.string().email("Введите корректный email").required("Введите email"),
    password: yup.string().min(6, "Пароль должен быть не менее 6 символов").required("Введите пароль"),
  });
  