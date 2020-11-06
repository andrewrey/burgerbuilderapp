import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = ({ ingredients }) => {
  let ingredientsArray = Object.keys(ingredients).map((igKey) => {
    return [...Array(ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });
  console.log(ingredientsArray);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={"bread-top"} />
      {ingredientsArray}
      <BurgerIngredient type={"bread-bottom"} />
    </div>
  );
};

export default Burger;
