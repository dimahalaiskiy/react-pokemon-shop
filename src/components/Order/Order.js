import React, { useState, useEffect } from "react";
import classes from "./Order.module.css";
import { Button, FormControl, TextField, Card } from "@mui/material";
import { onSnapshot, collection, addDoc } from "firebase/firestore";
import db from "../../db/firebase-config";

function Order() {
    const [orderData, setOrderData] = useState({
        name: "",
        surname: "",
        adress: "",
        phone: "",
    });

    const submitForm = async () => {
        const orderList = collection(db, "order-list");
        const fireBaseOrderData = orderData;
        await addDoc(orderList, fireBaseOrderData);
        setOrderData({ name: "", surname: "", adress: "", phone: "" });
    };

    useEffect(() =>
        onSnapshot(
            collection(db, "order-list"),
            (snapshot) => console.log(snapshot.docs.map((doc) => doc.data())),
            []
        )
    );

    return (
        <Card className={classes.cart_form}>
            <FormControl className={classes.form}>
                <TextField
                    margin='dense'
                    onChange={(e) => {
                        setOrderData({ ...orderData, name: e.target.value });
                    }}
                    className={classes.textfield}
                    color='warning'
                    id='outlined-basic'
                    label='NAME'
                    value={orderData.name}
                    variant='outlined'
                    required
                />
                <TextField
                    margin='dense'
                    onChange={(e) => {
                        setOrderData({ ...orderData, surname: e.target.value });
                    }}
                    className={classes.textfield}
                    color='warning'
                    id='outlined-basic'
                    label='SURNAME'
                    value={orderData.surname}
                    variant='outlined'
                    required
                />
                <TextField
                    margin='dense'
                    onChange={(e) => {
                        setOrderData({ ...orderData, adress: e.target.value });
                    }}
                    className={classes.textfield}
                    color='warning'
                    id='outlined-basic'
                    label='ADRESS'
                    value={orderData.adress}
                    variant='outlined'
                    required
                />
                <TextField
                    margin='dense'
                    onChange={(e) => {
                        setOrderData({ ...orderData, phone: e.target.value });
                    }}
                    className={classes.textfield}
                    color='warning'
                    id='outlined-basic'
                    label='PHONE'
                    value={orderData.phone}
                    variant='outlined'
                    required
                />
                <Button
                    className={classes.btn}
                    onClick={submitForm}
                    color='warning'
                    variant='outlined'
                    type='submit'>
                    Submit
                </Button>
            </FormControl>
        </Card>
    );
}

export default Order;
