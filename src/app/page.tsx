'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaLock } from 'react-icons/fa';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('hello', email, password);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" p-8 rounded w-72 bg-slate-200 shadow-md">
        <FaUser className="rounded-full text-white bg-blue-700 text-9xl mb-2 mx-auto mt-[-100px]" />
        <form onSubmit={(e) => handleLogin(e)} className="">
          <div className="flex">
            <FaUser className="bg-blue-900 text-white text-4xl 
        p-2 rounded-l-lg" />
            <input
              type="email"
              placeholder="admin@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-9 w-full bg-blue-600 border-none mb-10 text-white text-center rounded-r-lg"
            />
          </div>
          <div className="flex">
            <FaLock className="bg-blue-900 text-white text-4xl 
        p-2 rounded-l-lg " />
            <input
              type="password"
              placeholder="admin123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-9 w-full bg-blue-600 border-none mb-10 text-white text-center rounded-r-lg"
            />
          </div>
          {/* {errorMessage && (
        <div className="errorDiv">
          <h4 className="errorText">{errorMessage}</h4>
        </div>
      )} */}
          <button type="submit" className="bg-blue-900 text-white text-2xl rounded-md h-10 w-full">
            Login
          </button>
        </form>
        <Link href='/users/registration'
          className="text-blue-500 cursor-pointer"
        >
          Don't have an <span>account.</span>
        </Link>
        <p
          className="cursor-pointer text-blue-500"
        >
          Forgot Password?
        </p>
      </div>
    </main>
  );
}
