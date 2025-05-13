import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import HomePage from "../pages/startPage.jsx";
import VideoPage from "../pages/videoPage.jsx";
import App from "../App.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Error occurred</p>,
    children: [
      {
        index: true,
        element: <Navigate to="/homepage" replace />,
      },
      {
        path: "homepage",
        element: <HomePage />,
      },
      {
        path: "video",
        element: <VideoPage />,
      },
    ],
  },
  {
    path: "*",
    element: <p>Page not found</p>,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
