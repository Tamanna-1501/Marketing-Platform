"use client";

import { useState } from "react";
import Link from "next/link";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SignupPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    setError("");
    setSuccess("");

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSuccess("Demo signup submitted successfully. Backend is not connected.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-5">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-sm border">

        <div className="text-center mb-7">

          <h1 className="text-3xl font-bold text-blue-600">
            MarketFlow
          </h1>

          <h2 className="text-xl font-semibold mt-5">
            Create Your Account
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Start your marketing journey.
          </p>

        </div>

        <form onSubmit={handleSignup} className="space-y-4">

          <Input
            label="Full Name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            placeholder="Minimum 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          {success && (
            <p className="text-sm text-green-600">{success}</p>
          )}

          <Button type="submit" className="w-full">
            Create Account
          </Button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}