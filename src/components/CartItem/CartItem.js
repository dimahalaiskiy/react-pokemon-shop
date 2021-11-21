import classes from "./CartItem.module.css";
import { Button, Card } from "@mui/material";
import React from "react";

const CartItem = ({ cart, onUpdateCartQty }) => {
    return (
        <Card className={classes.container}>
            <ul className={classes.list}>
                <li>
                    <img
                        className={classes.img}
                        width='90px'
                        height='90px'
                        src={cart.image.url}
                        alt='pokemon_photo'
                    />
                </li>
                <li>
                    <ul className={classes.container_desc}>
                        <li className={classes.desc_item}>{cart.name}</li>
                        <li>${cart.price.raw * cart.quantity}</li>
                    </ul>
                </li>
                <li className={classes.quantity}>
                    <ul>
                        <Button
                            sx={{
                                minWidth: "35px",
                            }}
                            size='small'
                            color='warning'
                            variant='outlined'
                            onClick={() => onUpdateCartQty(cart.id, cart.quantity - 1)}>
                            -
                        </Button>
                        <span className={classes.quantity_item}>{cart.quantity}</span>
                        <Button
                            sx={{
                                minWidth: "35px",
                            }}
                            size='small'
                            color='warning'
                            variant='outlined'
                            onClick={() => onUpdateCartQty(cart.id, cart.quantity + 1)}>
                            +
                        </Button>
                    </ul>
                </li>
            </ul>
        </Card>
    );
};

export default CartItem;
