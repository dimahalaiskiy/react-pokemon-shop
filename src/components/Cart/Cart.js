import React from "react";
import { Typography } from "@mui/material";
import classes from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";
import Order from "../Order/Order";

export const Cart = ({ cart, handleRemoveFromCart, handleUpdateCartQty }) => {
    const EmptyCart = () => (
        <Typography variant='subtittle1'>
            You have no items in your shopping cart, start adding some!
        </Typography>
    );

    const FilledCart = () => (
        <div>
            <ul className={classes.container}>
                <li className={classes.cart}>
                    {cart.line_items.map((cart) => (
                        <CartItem
                            cart={cart}
                            key={cart.id}
                            onRemoveCartItem={handleRemoveFromCart}
                            onUpdateCartQty={handleUpdateCartQty}
                        />
                    ))}
                </li>
                <li>
                    <Order />
                </li>
            </ul>
        </div>
    );

    if (!cart.line_items) return "Loading ...";

    return (
        <div>
            <h2 className={classes.heading}>Your Shopping Cart</h2>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </div>
    );
};

export default Cart;
