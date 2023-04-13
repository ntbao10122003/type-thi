import * as Yup from "yup";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  brand: { id: number; name: string; slug: string };
}

export interface ISpecification {
  name: string;
  attributes: { code: string; name: string; value: string }[];
}

export const signupSchema = Yup.object({
  name: Yup.string().required("Trường name là bắt buộc"),
  email: Yup.string()
    .email("Email sai định dạng sai")
    .required("Trường email là bắt buộc"),
  password: Yup.string()
    .min(6, "Mật khẩu phải ít nhất 6 kí tự")
    .required("Trường password là bắt buộc"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Mật khẩu không khớp"
  ),
});

export type SignupForm = Yup.InferType<typeof signupSchema>;

export const signinSchema = Yup.object({
  email: Yup.string()
    .email("Email sai định dạng sai")
    .required("Trường email là bắt buộc"),
  password: Yup.string()
    .min(6, "Mật khẩu phải ít nhất 6 kí tự")
    .required("Trường password là bắt buộc"),
});

export type SigninForm = Yup.InferType<typeof signinSchema>;

export const updateSchema = Yup.object({
  name: Yup.string().required("Trường name là bắt buộc"),
  description: Yup.string().required("Trường mô tả ngắn là bắt buộc"),
  price: Yup.number()
    .min(1, "Giá phải lớn hơn 0")
    .required("Trường giá là bắt buộc"),
  brand : Yup.string().required("trường thuong hiệu bắt buộc")
});

export type updateForm = Yup.InferType<typeof updateSchema>;
