import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProviderMui from "./ProviderMUI";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import NavbarMobile from "./components/NavbarMobile";
const App = () => {
  return (
    <Router>
      <ProviderMui>
        <Switch>
          <Route exact path="/">
            <NavbarMobile />
            <Sidebar />
            <Navbar />
            <Home />
          </Route>
          <Route path="/contact">
            <NavbarMobile />
            <Sidebar />
            <Navbar />
            <Contact />
          </Route>
        </Switch>
      </ProviderMui>
    </Router>
  );
};

export default App;
