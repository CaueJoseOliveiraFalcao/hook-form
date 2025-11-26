import { z } from "zod";

export const zUserFormPassword = z
  .object({
    email: z.string().min(1, "Pelo Menos 1 caractere"),
    password: z.string().min(6, "Minimo 6 caracteres"),
    confirm_password: z.string().min(6, "Minimo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Senhas nao coecidem",
    path: ["confirm_password"],
  });

export const zAdvancedForm = z
  .object({
    password: z.string().min(6, "tem que ter 6 caracteres"),
    confirm_password: z.string().min(6, "tem que ter 6 caracteres"),
    quantidade: z.coerce
      .number<number>({
        error: () => ({ message: "deve ser um numero" }),
      })
      .positive("Valor maior que 0"),
    permissao: z.enum(["admin", "user"], "admin ou user"),
    url: z.url("insira uma url valida"),
    agree: z.boolean(),
    select: z.string(),
  })
  .refine((fields) => fields.confirm_password === fields.password, {
    path: ["confirm_password"],
    message: "senhas presisam ser iguais",
  })
  .refine((fields) => fields.agree === true, {
    path: ["agree"],
    message: "precisa aceita kk",
  })
  .transform((field) => ({
    password: field.password.toLocaleUpperCase(),
    confirm_password: field.confirm_password.toLocaleUpperCase(),
    quantidade: field.quantidade,
    permissao: field.permissao,
    url: field.url,
    agree: field.agree,
    select: field.select,
  }));

export type AdvancedFormType = z.infer<typeof zAdvancedForm>;
