import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/home/Home";

function App() {
  const AppWrapper = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      //     { path: "About", element: <About /> },
      //     { path: "Project", element: <Project /> },
      //     { path: "Resume", element: <Resume /> },
    ]);
    return routes;
  };

  return (
    <>
      <Router>
        <Header />
        <AppWrapper />
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
