import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = ({ children }) => {
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>{children}</main>
    </Aux>
  );
};

export default Layout;
