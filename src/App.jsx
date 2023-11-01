import classes from "./App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Register from "./Pages/Register";
import FormPage from "./Pages/FormPage";
import ApiPage from "./Pages/ApiPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/register", element: <Register /> },
  { path: "/form", element: <FormPage /> },
  { path: "Api", element: <ApiPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
