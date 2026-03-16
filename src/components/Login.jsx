import React from "react";

const Login = ({ setLoginPage, setIsClicked }) => {
  return (
    <div className="shadow bg-white rounded-xl font-inter tracking-tighter flex flex-col items-center gap-5 my-auto p-10 max-w-4xl">
      <div className="heading text-center">
        <h2 className="text-3xl font-bebas">Welcome Back</h2>
        <p className="text-gray-600">Sign in to your account</p>
      </div>
      <div className="form flex flex-col gap w-80">
        <label className="font-light text-gray-600" htmlFor="email">
          Email
        </label>
        <input
          className="mb-3 border border-gray-300 rounded-xl px-2 py-2 focus:outline-2 focus:outline-gray-300 "
          type="email"
          name="email"
        />
        <label className="font-light text-gray-600" htmlFor="password">
          Password
        </label>
        <input
          className="mb-3 border border-gray-300 rounded-xl px-2 py-2 focus:outline-2 focus:outline-gray-300 "
          type="password"
        />
        <button
          className="rounded-xl px-5 py-2 bg-black text-white my-5 hover:scale-[.99]"
          onClick={() => setIsClicked(true)}
        >
          Sign in
        </button>
      </div>
      <p className="font-light">
        Don't have an account?{" "}
        <span className="font-semibold cursor-pointer" onClick={() => setLoginPage(false)}>
          Sign up
        </span>{" "}
      </p>
    </div>
  );
};

export default Login;
