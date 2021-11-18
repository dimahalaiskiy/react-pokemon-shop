import React from "react";
import { Typography, Button } from "@mui/material";
import classes from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";

export const Cart = ({ cart }) => {
    const EmptyCart = () => (
        <Typography variant='subtittle1'>
            You have no items in your shopping cart, start adding some!
        </Typography>
    );

    const FilledCart = () => (
        <div>
            <ul className={classes.container}>
                {cart.line_items.map((cart) => (
                    <CartItem cart={cart} />
                ))}
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
