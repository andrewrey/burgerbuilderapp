import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  render() {
    const { children } = this.props;
    return (
      <Aux>
        <Toolbar />
        <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>{children}</main>
      </Aux>
    );
  }
}

export default Layout;
