import { createBrowserRouter } from "react-router-dom";
import Main from "./containers/Main";
import Test from "./containers/Test";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
