import classes from "./Navbar.module.css";
import { Button, Badge } from "@mui/material/";

function Header({ totalItems }) {
    return (
        <header className={classes.header}>
            <h1 className={classes.heading}>Pokemon shop</h1>
            <Badge badgeContent={totalItems} color='warning'>
                <Button
                    className={classes.button}
                    sx={{
                        color: "white",
                        border: "1px solid white",
                        "&:hover": {
                            border: "rgb(75, 17, 17);",
                            backgroundColor: "white",
                            color: "rgb(75, 17, 17);",
                        },
                    }}
                    variant='outlined'>
                    basket
                </Button>
            </Badge>
        </header>
    );
}

export default Header;
