import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./Container/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;