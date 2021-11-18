import CardComponent from "../ProductItem/Product";
import MainHeading from "../layouts/Heading/MainHeading";
import classes from "./Products.module.css";

function Cards({ products, onAddToCard }) {
    console.log(products);

    return (
        <div>
            <MainHeading />
            <div className={classes.cards}>
                {products.map((product) => (
                    <CardComponent
                        product={product}
                        key={product.id}
                        onAddToCard={onAddToCard}
                    />
                ))}
            </div>
        </div>
    );
}

export default Cards;
