import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home/Home";
import Sell from "./pages/sell/Sell";
import Buy from "./pages/buy/Buy";


function App() {
  const AppWrapper = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/Sell", element: <Sell /> },
      { path: "/Buy", element: <Buy /> },
      //     { path: "Resume", element: <Resume /> },
    ]);
    return routes;
  };

  return (
    <>
      <Router>
        <Header />
        <AppWrapper />
        <Footer />
      </Router>
    </>
  );
}

export default App;
