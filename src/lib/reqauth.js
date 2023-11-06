import { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../user-context/user-info.js";

export function RequireAuth({ children }) {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userCtx.isAuthenticated) {
      // Redirect them to the /register page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      navigate("/register");
    }
  });

  return children;
}
