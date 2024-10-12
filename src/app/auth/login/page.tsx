"use client";

import { handleLogin } from "@/http/api";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  //mutation
  const mutation = useMutation({
    mutationFn: handleLogin,
    onSuccess: (res) => {
      //Store token in a cookie
      Cookies.set("token", res.data.accessToken, { expires: 1 });
      router.push("/");
    },
  });

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      return;
    }
    //mutation
    mutation.mutate({ email, password });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {mutation.isError && (
          <div className="text-red-400 text-sm mb-2 text-center">
            User Not Found!
          </div>
        )}

        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-bold text-gray-700">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          disabled={mutation.isPending}
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
        <div className="mt-4 text-center tetx-sm">
          Don&apos;t have an account
          <Link href="/auth/register" className="underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
