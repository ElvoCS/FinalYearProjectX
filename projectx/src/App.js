import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Foo from "./components/Foo";
import Test from "./components/Test";
import Info from "./components/Info";
import Learn from "./components/Learn";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/*learn */}
          <Route path="/learn">
            <Header />
            <Learn />
            <Footer />
          </Route>

          {/* test */}
          <Route path="/test">
            <Header />
            <Test />
            <Footer />
          </Route>

          {/*info */}
          <Route path="/info">
            <Header />
            <Info />
            <Footer />
          </Route>

          {/*Home Page */}
          <Route path="/home">
            <Header />
            <Home />
            <Footer />
          </Route>

          {/*Landing Page */}
          <Route path="/">
            <Foo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
