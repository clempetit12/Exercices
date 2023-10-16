import Addproduct from "./Components/AddProduct";
import ProductList from "./Components/Productlist";

function App() {
  return (
    <div className="App">
    <h1 className="p-4">Application de gestion de produits </h1>
    <hr></hr>

    <ProductList/>
    <Addproduct/>
    </div>
  );
}

export default App;
