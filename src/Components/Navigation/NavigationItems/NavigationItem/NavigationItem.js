import classes from "./NavigationItem.module.css";

const NavigationItem = ({ link, children, active }) => {
  return (
    <li className={classes.NavigationItem}>
      <a href={link} className={active ? classes.Active : null}>
        {children}
      </a>
    </li>
  );
};

export default NavigationItem;
