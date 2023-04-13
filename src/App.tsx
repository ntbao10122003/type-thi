import { BrowserRouter , Route , Router , Routes } from "react-router-dom"
import Home from "./components/user/home"
import Product from "./components/user/product"
import LayoutUser from "./components/layoutUser"
import Signin from "./components/admin/auth/signin"
import Signup from "./components/admin/auth/signup"
import Add from "./components/admin/add"
import Update from "./components/admin/update"
import  List  from "./components/admin/list"
import LayoutAdmin from "./components/layoutAdmin"
import { useState, useEffect } from "react";
import { addProduct, deleteProducts, getProducts, updateProduct } from "./api/product";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
    setProducts(response.data.docs);
  });
  }, []);

  const onHandleAdd = (product:IProduct) => {
    addProduct(product).then((data) => {
      console.log(data);
      getProducts().then(({data}) => setProducts(data))
    });
  };

  const onHandleRemove = (id: string|number) => {
    deleteProducts(id).then(() => {
      setProducts(products.filter((item) => item.id !== id));
    });
  };

  const onHandleUpdate = (product:IProduct) => { 
    updateProduct(product).then(() => {
      setProducts(products.map((item) => (item.id === product.id ? product : item)));
    });
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<LayoutUser></LayoutUser>}></Route>

          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>

          <Route path="/admin" element={<LayoutAdmin></LayoutAdmin>}>
              <Route index element={<List onRemove = {onHandleRemove} products = {products}></List>}></Route>
              <Route path="add" element={<Add onAdd={onHandleAdd}></Add>}></Route>
              <Route path="product/:id" element={<Update onUpdate={onHandleUpdate}></Update>}></Route>

          </Route>

        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
