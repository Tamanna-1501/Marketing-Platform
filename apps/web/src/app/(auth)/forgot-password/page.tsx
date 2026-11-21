"use client";

import { useState } from "react";
import Link from "next/link";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function ForgotPasswordPage() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("Demo request submitted. Password reset API is not connected.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-5">

      <div className="bg-white border rounded-2xl shadow-sm p-8 w-full max-w-md">

        <h1 className="text-2xl font-bold text-blue-600 text-center">
          MarketFlow
        </h1>

        <h2 className="text-xl font-semibold mt-8 text-center">
          Forgot Password?
        </h2>

        <p className="text-gray-500 text-sm text-center mt-2 mb-7">
          Enter your registered email address.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Button type="submit" className="w-full">
            Send Reset Link
          </Button>

          {message && (
            <p className="text-sm text-blue-600">{message}</p>
          )}

        </form>

        <Link
          href="/login"
          className="block text-center text-blue-600 text-sm mt-6"
        >
          Back to Login
        </Link>

      </div>

    </div>
  );
}