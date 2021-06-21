import style from "./App.module.css";
import About from "./pages/About/AboutPage";
import Home from "./pages/Home/Home";
import Contact from "./pages/ContactPage/ContactPage";
import Header from "./components/Header/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
function App() {
  return (
    <div className={style.container}>
      <Header />

      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
