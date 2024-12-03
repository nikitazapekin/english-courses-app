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
    .min(2, "The name must be at least 2 characters long")
    .test(
      "is-first-letter-uppercase",
      "The first character must be leading",
      (value) => {
        if (!value) return false;
        return /^[A-ZА-Я]/.test(value);
      },
    ),

  email: yup
    .string()
    .required("Field is required")
    .matches(regExpEmail, "Invalid email format"),

  password: yup
    .string()
    .required("Field is required")
    .min(6, "Password must be at least 6 characters long")
    .test("password-strength", "Password is too weak", (value) => {
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
  .required("Confirm Password is required")
  .test("passwords-match", "Passwords must match", function (value) {
    return value === this.resolve(yup.ref("password"));
  }),


 
  age: yup
    .number()
    .required("Field is required")
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .max(100, "Please enter a correct age"),
    
    gender: yup
    .string()
    .required("Field is required")
    .oneOf(["man", "female"], "Choose the correct gender"),
 
  country: yup
    .string()
    .required("Field is required")
    .test("is-valid-country", "Invalid country selected", function (value) {
      const { countries } = this.options.context as ValidationContext;
      return countries.includes(value || "");
    }),

  agreeToTerms: yup
    .boolean()
    .required("Consent required")
    .oneOf([true], "Consent required"),
});


/*
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
    .min(2, "The name must be at least 2 characters long")
    .test(
      "is-first-letter-uppercase",
      "The first character must be leading",
      (value) => {
        if (!value) return false;
        return /^[A-ZА-Я]/.test(value);
      },
    ),

  email: yup
    .string()
    .required("Field is required")
    .matches(regExpEmail, "Invalid email format"),

  password: yup
    .string()
    .required("Field is required")
    .min(6, "Password must be at least 6 characters long")
    .test("password-strength", "Password is too weak", (value) => {
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
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Field is required"),
  
  age: yup
    .number()
    .required("Field is required")
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .max(100, "Please enter a correct age"),

  gender: yup
    .string()
    .required("Field is required")
    .oneOf(["man", "female"], "Choose the correct gender"),

  country: yup
    .string()
    .required("Field is required")
    .test("is-valid-country", "Invalid country selected", function (value) {
      const { countries } = this.options.context as ValidationContext;
      return countries.includes(value || "");
    }),

  agreeToTerms: yup
    .boolean()
    .required("Consent required")
    .oneOf([true], "Consent required"),

 
});
*/

/*
import * as yup from "yup";

const regExpEmail = new RegExp(/^\S+@\S+\.\S+$/);

interface ValidationContext {
  countries: string[];
}

export const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Поле обязательно для заполнения")
    .min(2, "Имя должно содержать как минимум 2 символа")
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
    .required("Поле обязательно для заполнения")
    .matches(regExpEmail, "Неправильный формат электронной почты"),

  password: yup
    .string()
    .required("Поле обязательно для заполнения")
    .min(6, "Пароль должен содержать как минимум 6 символов")
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
  .required("Field is required")
  .test("passwords-match", "Passwords must match", function (value) {
    return value === this.resolve(yup.ref("password"));
  }),



  age: yup
    .number()
    .required("Поле обязательно для заполнения")
    .positive("Возраст должен быть положительным числом")
    .integer("Возраст должен быть целым числом")
    .max(100, "Введите корректный возраст"),

  gender: yup
    .string()
    .required("Поле обязательно для заполнения")
    .oneOf(["man", "female"], "Выберите корректный пол"),

  country: yup
    .string()
    .required("Поле обязательно для заполнения")
    .test("is-valid-country", "Выберите корректную страну", function (value) {
      const { countries } = this.options.context as ValidationContext;
      return countries.includes(value || "");
    }),

  agreeToTerms: yup
    .boolean()
    .required("Необходимо согласие")
    .oneOf([true], "Необходимо согласие"),
});
 */