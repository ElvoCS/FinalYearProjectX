import { React, Component } from "react";
import { Redirect } from "react-router-dom";
import Loading from "./Loading";

class Foo extends Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 6000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? <Redirect to="/home" /> : <Loading />;
  }
}

export default Foo;
