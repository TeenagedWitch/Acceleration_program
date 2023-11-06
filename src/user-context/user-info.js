import { createContext } from "react";

export const UserContext = createContext({
  username: [],
  isAuthenticated: false,
  image: null,
});
