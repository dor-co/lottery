import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  return (
    <div className="app-wrapper">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
