import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import authService from "../services/firebase/auth";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = async ({ email, password }) => {
    const user = await authService.login({ email, password });
    setUser(user);
    setIsLoggedIn(true);
  };

  const handleSignup = async ({ email, password, name }) => {
    const user = await authService.createAccount({ email, password, name });
    setUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    await authService.logout();
    setIsLoggedIn(false);
  };

  return (
    <header className=" h-screen mt-12 p-4 flex justify-start items-center flex-col gap-36">
      <div>
        <h1 className="text-5xl font-bold">Appwrite Auth</h1>
      </div>
      <div className="flex flex-row justify-evenly w-full">
        {!isLoggedIn ? (
          <>
            <Login handleLogin={handleLogin} />
            <Signup handleSignup={handleSignup} />
          </>
        ) : (
          <div>
            <h1>UserID : {user?.$id}</h1>
            <button
              className="mx-2 px-4 py-2 bg-red-500 rounded hover:bg-red-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
