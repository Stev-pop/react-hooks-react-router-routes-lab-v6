import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors"

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path: "/actors",
    element: <Actors />
  },
  {
    path: "/movie/:id",
    element: <Movie />
  }
   
  ];

export default routes;