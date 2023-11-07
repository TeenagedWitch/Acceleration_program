import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../user-context/user-info.js";

export function RequireAuth({ children }) {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const userName = localStorage.getItem("username");

    if (isAuthenticated === "true") {
      userCtx.isAuthenticated = true;
      userCtx.username.push(userName);
    } else {
      navigate("/register");
    }
  }, [userCtx, navigate]);

  return children;
}
