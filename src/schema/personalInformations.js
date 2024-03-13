import { z } from "zod";export const personalInformationSchema = z.object({
  name: z.string().min(3, {
    message: "name is required and must be more than three characters",
  }),
  id: z.string().min(1, {
    message: "id is required",
  }),
  code: z.string(),
  birth: z.string().min(1, {
    message: "id is required",
  }),
  age: z.string().min(1, {
    message: "age is required",
  }),
  status: z.string().min(1, {
    message: "status is required",
  }),
  address: z.string(),
  phone: z
    .string()
    .min(1, {
      message: "phone is required",
    })
    .max(11),
  email: z.string().email({
    message: "email is required",
  }),
  homeNumber: z.string(),
  relativeName: z.string(),
});
