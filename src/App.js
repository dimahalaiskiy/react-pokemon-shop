import { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import classes from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProduct = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);
        setCart(cart);
    };

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, {
            quantity,
        });
        setCart(cart);
    };

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
    };

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
    };

    useEffect(() => {
        fetchProduct();
        fetchCart();
    }, []);

    return (
        <BrowserRouter>
            <div className={classes.main}>
                <Navbar totalItems={cart.total_items} />
                <Routes>
                    <Route
                        exact
                        path='/'
                        element={
                            <Products products={products} onAddToCard={handleAddToCart} />
                        }></Route>
                    <Route
                        exact
                        path='/basket'
                        element={
                            <Cart
                                cart={cart}
                                handleUpdateCartQty={handleUpdateCartQty}
                                handleRemoveFromCart={handleRemoveFromCart}
                                handleEmptyCart={handleEmptyCart}
                            />
                        }></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
