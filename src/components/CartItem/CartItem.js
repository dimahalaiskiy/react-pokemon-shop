import classes from "./CartItem.module.css";
import { Button } from "@mui/material";
import React from "react";

const CartItem = ({ cart }) => {
    console.log(cart);
    return (
        <ul className={classes.container}>
            <li>
                <img width='80px' height='80px' src={cart.image.url} />
            </li>
            <li>
                <ul>
                    <li>{cart.name}</li>
                    <li>{cart.price.raw * cart.quantity}$</li>
                </ul>
            </li>
            <li>
                <ul>
                    <Button size='small' color='warning'>
                        -
                    </Button>
                    <span>{cart.quantity}</span>
                    <Button size='small' color='warning'>
                        +
                    </Button>
                </ul>
            </li>
        </ul>
    );
};

export default CartItem;
