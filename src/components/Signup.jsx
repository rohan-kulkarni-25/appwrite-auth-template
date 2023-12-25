import React, { useState } from "react";

const Signup = ({ handleSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const Signup = () => {
    if (email && password && name) {
      handleSignup({ email, password, name });
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Email
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={Signup}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
