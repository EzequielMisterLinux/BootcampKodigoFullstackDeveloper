import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import UserLogin from "./api/LoginServices";
import HomeUser from "./components/HomeUser"; 

export default function App() {
  const [login, setLogin] = useState(null);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = async () => {
    const response = await UserLogin(email, pass);
    setLogin(response);
  };

  const token = login?.token;

  if (token) {
    sessionStorage.setItem("token", token);
  }

  const isLogin = sessionStorage.getItem("token");

  const getMail = (event) => setEmail(event.target.value);
  const getPass = (event) => setPass(event.target.value);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLogin ? (
            <Navigate to="/home-user" />
          ) : (
            <div>
              <div>
                <input type="email" placeholder="email" onChange={getMail} />
              </div>
              <div>
                <input type="password" placeholder="password" onChange={getPass} />
              </div>
              <div>
                <button onClick={handleLogin}>Login</button>
              </div>
              {token && <p>Login successful! Token stored in session.</p>}
              {!isLogin && <h2>Please log in</h2>}
            </div>
          )
        }
      />
      <Route path="/home-user" element={<HomeUser />} />
    </Routes>
  );
}
