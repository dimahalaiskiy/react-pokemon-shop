import classes from "./Product.module.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

function CardComponent({ product, onAddToCard }) {
    return (
        <Card className={classes.card}>
            <div className={classes.card_item}>Name: {product.name}</div>
            <img className={classes.card_img} src={product.image.url} alt='#'></img>
            <li
                className={classes.card_item_desc}
                dangerouslySetInnerHTML={{
                    __html: product.description,
                }}></li>
            <ul className={classes.card_purchase}>
                <li className={classes.card_price}>{product.price.formatted_with_symbol}</li>
                <li className={classes.card_btn}>
                    <Button
                        variant='outlined'
                        size='small'
                        sx={{
                            borderColor: "rgba(75, 17, 17, 0.5);",
                            color: "rgb(75, 17, 17);",
                            "&:hover": {
                                border: "1px solid rgb(75, 17, 17);",
                                backgroundColor: "white",
                                color: "rgb(75, 17, 17);",
                            },
                        }}
                        onClick={() => onAddToCard(product.id, 1)}>
                        ADD
                    </Button>
                </li>
            </ul>
        </Card>
    );
}

export default CardComponent;
