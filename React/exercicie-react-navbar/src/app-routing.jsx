import { createBrowserRouter } from "react-router-dom";
import Accueil from "./routes/Accueil";
import ErrorPage from "./routes/ErrorPage";
import App from "./App";
import Projets from "./routes/Projets";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Menu from "./routes/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Accueil /> },
      { path: "/projets", element: <Projets /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default router;
