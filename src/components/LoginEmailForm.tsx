"use client";

import { handleEmailLogin } from "@/lib/action";
import { useFormState } from "react-dom";

const LoginEmailForm = () => {
  const [state, formAction] = useFormState(handleEmailLogin, undefined);

  return (
    <form className="flex flex-col gap-5 w-[300px]" action={formAction}>
      <p>Login with email</p>
      <input
        className="border border-solid border-gray-500 p-1"
        type="email"
        placeholder="email"
        name="email"
        required
      />
      <input
        className="border border-solid border-gray-500 p-1"
        type="password"
        placeholder="password"
        name="password"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Login
      </button>
      <p>{state?.error}</p>
    </form>
  );
};

export default LoginEmailForm;
