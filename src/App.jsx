import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { createContext, useState } from "react";
import Modal from "./components/Modal/Modal";

export const CartContext = createContext([]);

function App() {
  let [isOpen, setIsOpen] = useState(false)
  const [Cart, setCart] = useState([]);

  const cartAlert = sessionStorage.getItem('alert');
  if(Cart.length > 0 && cartAlert !== 'true'){
    setIsOpen(true)
sessionStorage.setItem("alert",true)
  }

  return (
    <CartContext.Provider value={[Cart, setCart]}>
      <div>
        <Header></Header>
        <main>
          <Outlet></Outlet>
        </main>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>
      </div>
    </CartContext.Provider>
  );
}

export default App;
