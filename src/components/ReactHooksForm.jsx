import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

// useForm - register, handleSubmit
// yup, zod

// define our validation schema
const validationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid Email Address")
    .required("Email is required"),
  password: yup.string().required("Password is required").min(7, "Minimum password length is 7"),
});

const ReactHooksForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const handleFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="myform">
        <h1>Submit your Details</h1>
        <input
          type="text"
          className={`input mt-2 w-full ${
            errors.firstName ? "border border-red-500" : ""
          }`}
          placeholder="First name"
          {...register("firstName")}
        />
        <p className="text-red-500">
          {errors.firstName && errors.firstName.message}
        </p>
        <input
          type="text"
          className={`input mt-2 w-full ${
            errors.lastName ? "border border-red-500" : ""
          }`}
          placeholder="Last name"
          {...register("lastName")}
        />
        <p className="text-red-500">
          {errors.lastName && errors.lastName.message}
        </p>
        <input
          type="email"
          className={`input mt-2 w-full ${
            errors.email ? "border border-red-500" : ""
          }`}
          placeholder="Email Address"
          {...register("email")}
        />
        <p className="text-red-500">{errors.email && errors.email.message}</p>

        <input
          type="password"
          className={`input mt-2 w-full ${
            errors.password ? "border border-red-500" : ""
          } `}
          placeholder="Password"
        />
        <p className="text-red-500">{errors.password && errors.password.message}</p>

        <button type="submit" className="btn btn-accent w-full mt-2.5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactHooksForm;
