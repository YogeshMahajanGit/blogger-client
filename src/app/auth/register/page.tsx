"use client";

import { handleRegister } from "@/http/api";
import useTokenStore from "@/store";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function RegisterForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const setToken = useTokenStore((state) => state.setToken);

  const mutation = useMutation({
    mutationFn: handleRegister,
    onSuccess: (res) => {
      //store in local storage
      setToken(res.data.accessToken);
      router.push("/");
    },
  });

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!name || !email || !password) {
      return;
    }
    //mutation
    mutation.mutate({ name, email, password });
  };
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg w-96"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              name
            </label>
            <input
              ref={nameRef}
              type="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

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

          {mutation.isError && (
            <div className="text-red-400 text-sm mb-2 text-center">
              {mutation.error.message}
            </div>
          )}

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
            disabled={mutation.isError}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
          <div className="mt-4 text-center tetx-sm">
            have an account
            <Link href="/auth/login" className="underline">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
