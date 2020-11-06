import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = ({ ingredients }) => {
  let burgerIngredients = Object.keys(ingredients)
    .map((igKey) => {
      return [...Array(ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((acc, curr) => acc.concat(curr), []);
  console.log(burgerIngredients);
  if (burgerIngredients.length === 0) {
    burgerIngredients = <p>Please add ingredients to your burger</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={"bread-top"} />
      {burgerIngredients}
      <BurgerIngredient type={"bread-bottom"} />
    </div>
  );
};

export default Burger;
