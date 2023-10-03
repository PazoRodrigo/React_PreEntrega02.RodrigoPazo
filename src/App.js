import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <NavBar texto="Mi carrito" />
      <ItemListContainer greeting="Tu Carrito" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
