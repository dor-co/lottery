import { createBrowserRouter } from "react-router-dom";
import Main from "./containers/Main";
import LotteryDetails from "./containers/LotteryDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/lottery-details",
    element: <LotteryDetails />,
  },
]);
