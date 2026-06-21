import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("field is left Empty"),
    email: yup
      .string()
      .email("Use A Real Email")
      .required("field is left Empty"),
    age: yup
      .number("Use numbers please")
      .required("field is left Empty")
      .positive()
      .min(18),
    password: yup.string().required("field is left Empty").min(4).max(20),
    confirmPassword: yup
      .string()
      .required("field is left Empty")
      .oneOf([yup.ref("password"), null], "Passwords don't match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name" {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age" {...register("age")} />
      <p>{errors.age?.message}</p>
      <input type="password" placeholder="Password" {...register("password")} />
      <p>{errors.password?.message}</p>
      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};
