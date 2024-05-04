import Navbar from "./components/Navebar";
import { ShopingCartProvider } from "./context/ShopingCartContext";


function App() {
 return (
    <ShopingCartProvider>
        <Navbar />
    </ShopingCartProvider>
 )
}

export default App;
