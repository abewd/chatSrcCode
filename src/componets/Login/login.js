import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css"
const SignupPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    console.log(data); // replace with your actual submit function
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="w-full max-w-md formContainer">
        <h2 className="text-3xl font-bold text-center mb-8">Log In</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              id="email"
              type="email"
              className={`w-full mt-1 rounded-md border-gray-300 ${errors.email ? "border-red-500" : ""
                }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          {/* <div>
            <label htmlFor="username" className="block font-medium">
              Username
            </label>
            <input
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters long",
                },
              })}
              id="username"
              type="text"
              className={`w-full mt-1 rounded-md border-gray-300 ${errors.username ? "border-red-500" : ""
                }`}
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-500">{errors.username.message}</p>
            )}
          </div> */}
          <div>
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              id="password"
              type="password"
              className={`w-full mt-1 rounded-md border-gray-300 ${errors.password ? "border-red-500" : ""
                }`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
         
          <button
            type="submit"
            className={`w-full py-2 px-4 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
              } text-white font-medium rounded-md transition-colors duration-300`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  )
}
export default SignupPage;