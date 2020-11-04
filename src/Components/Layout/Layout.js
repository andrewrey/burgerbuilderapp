import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>{children}</main>
    </Aux>
  );
};

export default Layout;
