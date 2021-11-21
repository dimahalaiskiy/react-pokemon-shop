import classes from "./Navbar.module.css";
import { Badge } from "@mui/material/";
import { Link } from "react-router-dom";

function Header({ totalItems }) {
    return (
        <header className={classes.header}>
            <Link className={classes.heading} components={Link} to='/'>
                Pokemon shop
            </Link>
            <Badge badgeContent={totalItems} color='warning'>
                <Link className={classes.link} to='/basket'>
                    basket
                </Link>
            </Badge>
        </header>
    );
}

export default Header;
