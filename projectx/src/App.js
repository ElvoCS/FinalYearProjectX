import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Foo from "./components/Foo";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/*learn */}
          <Route path="/learn">
            <Header />

            <Footer />
          </Route>

          {/* test */}
          <Route path="/test">
            <Header />

            <Footer />
          </Route>

          {/*info */}
          <Route path="/info">
            <Header />

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
