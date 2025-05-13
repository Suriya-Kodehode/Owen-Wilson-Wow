import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import HomePage from "../pages/startPage.jsx";
import VideoPage from "../pages/videoPage.jsx";
import App from "../App.jsx";

const ErrorElement = () => {
  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <h1>Error occurred</h1>
      <p>Something went wrong. Please try reloading the page.</p>
    </div>
  );
};

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
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
    element: <ErrorElement />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
