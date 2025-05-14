import * as z from "zod";

export const schema = z.object({
  username: z.string().min(2, "Username слишком короткий"),
  password: z
    .string()
    .min(6, "Password должен быть больше 5 символов")
    .max(20, "Слишком большой размер Password")
    // .regex(/^[\x00-\x7F]+$/, "Пароль должен содержать только латинские символы и цифры")
    .regex(
      /^[a-zA-Z0-9!@#$%^&*()_+]+$/,
      "Пароль должен содержать только латинские буквы, цифры и спецсимволы"
    )
    .regex(/[A-Z]/, "Должна быть хотя бы одна заглавная буква")
    .regex(/[0-9]/, "Должна быть хотя бы одна цифра"),
});

export type Schema = z.infer<typeof schema>;
