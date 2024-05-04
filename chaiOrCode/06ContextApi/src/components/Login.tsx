import React, { useState, useContext } from "react";
import UserContext from "../context/Usercontext";

function Login() {
  const [user, setUsername] = useState("");
  const [passward, setPassword] = useState(""); // Corrected the spelling of 'password'
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({ user, passward }); // Passing an object containing both username and password
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      />
      <input
        onChange={(e) => setPassword(e.target.value)} // Corrected the setter function to setPassword
        type="password" // Changed to type "password" for password input
        placeholder="password" // Changed placeholder to "password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
