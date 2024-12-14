import * as yup from "yup";

const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/);

interface ValidationContext {
  countries: string[];
}

export const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Field is required")
    .min(2, "Имя должно иметь хотя бы 2 символа")
    .test(
      "is-first-letter-uppercase",
      "Первая буква должна быть заглавной",
      (value) => {
        if (!value) return false;
        return /^[A-ZА-Я]/.test(value);
      },
    ),

  email: yup
    .string()
    .required("Field is required")
    .matches(regExpEmail, "Неккоректный email"),

  password: yup
    .string()
    .required("Field is required")
    .min(6, "Пароль должен быть минимально из 6 символов")
    .test("password-strength", "Пароль слишком слабый", (value) => {
      if (!value) return false;

      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

      const strengthCount = [
        hasUpperCase,
        hasLowerCase,
        hasNumber,
        hasSpecialChar,
      ].filter(Boolean).length;

      return strengthCount >= 3;
    }),

 

confirmPassword: yup
  .string()
  .required("Подтвердите пароль")
  .test("passwords-match", "Пароли должны совпадать", function (value) {
    return value === this.resolve(yup.ref("password"));
  }),

 
  country: yup
    .string()
    .required("Field is required")
    .test("is-valid-country", "Неккоректная страна", function (value) {
      const { countries } = this.options.context as ValidationContext;
      return countries.includes(value || "");
    }),

  agreeToTerms: yup
    .boolean()
    .required("Consent required")
    .oneOf([true], "Требуется согласие"),
});
 