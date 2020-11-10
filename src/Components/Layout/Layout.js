import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = ({ children }) => {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>{children}</main>
    </Aux>
  );
};

export default Layout;
