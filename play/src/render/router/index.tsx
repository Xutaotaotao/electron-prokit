import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layout";
import ErrorPage from "../pages/error-page";
import Ipc from "../pages/ipc";
import Home from "../pages/home";
import Http from "../pages/http";
import Ffi from "../pages/ffi";
import Schedule from "../pages/schedule";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "ipc",
        element: <Ipc />,
      },
      {
        path: "http",
        element: <Http />,
      },
      {
        path: "ffi",
        element: <Ffi />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
    ],
  },
]);

export default router