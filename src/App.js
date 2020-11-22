import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./Container/BurgerBuilder/BurgerBuilder";

class App extends Component {
  // state = {
  //   show: true,
  // };
  // componentDidMount() {
  //   setTimeout(() => this.setState({ show: false }), 3000);
  // }

  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
