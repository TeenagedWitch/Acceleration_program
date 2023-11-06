import classes from "./App.module.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { RequireAuth } from "./lib/reqauth";

import HomePage from "./Pages/HomePage";
import Register from "./Pages/Register";
import FormPage from "./Pages/FormPage";
import ApiPage from "./Pages/ApiPage";
import RootLayout from "./Pages/Root";
import { UserContext } from "./user-context/user-info";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/register", element: <Register /> },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/form",
        element: (
          <RequireAuth>
            <FormPage />
          </RequireAuth>
        ),
      },
      {
        path: "/api",
        element: (
          <RequireAuth>
            <ApiPage />
          </RequireAuth>
        ),
      },
    ],
  },
]);

const userContext = {
  username: [],
  isAuthenticated: false,
  image: null,
};

function App() {
  return (
    <UserContext.Provider value={userContext}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
