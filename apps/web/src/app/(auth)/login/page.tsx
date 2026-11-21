"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    setMessage("Demo login form submitted. Backend authentication is not connected yet.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-5">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-sm border">

        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-blue-600">
            MarketFlow
          </h1>

          <h2 className="text-xl font-semibold mt-6">
            Welcome Back!
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Login to your marketing workspace.
          </p>

        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600"
            >
              Forgot Password?
            </Link>
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>

          {message && (
            <p role="status" className="text-sm text-blue-600">
              {message}
            </p>
          )}

        </form>

        <p className="text-center text-sm text-gray-500 mt-7">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600 font-semibold">
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}