import { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import classes from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import MainHeading from "./components/layouts/Heading/MainHeading";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

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

    useEffect(() => {
        fetchProduct();
        fetchCart();
    }, []);

    console.log(cart);

    const handleAddToCart = async (productId, quanitity) => {
        const item = await commerce.cart.add(productId, quanitity);
        setCart(item.cart);
    };

    return (
        <div className={classes.main}>
            <Navbar totalItems={cart.total_items} />

            {/* <Products products={products} onAddToCard={handleAddToCart} /> */}
            <Cart cart={cart} />
        </div>
    );
}

export default App;
