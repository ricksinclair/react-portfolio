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
        <Route path="react-portfolio/home">
          <Home />
        </Route>
        <Route path="/react-portfolio">
          <Redirect to="react-portfolio/home" />
        </Route>
        <Route path="/react-portfolio/about">
          <About />
        </Route>
        <Route path="/react-portfolio/contact">
          <Contact />
        </Route>

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
