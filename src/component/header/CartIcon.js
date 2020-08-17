import React from 'react'
import Styles from './styles/headerStyle';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";

function CartIcon({ isMobileMenuOpen }) {
    const classes = Styles();

    return (
        <IconButton
            color="inherit"
            classes={{ label: classes.cartIcon }}> 
            <Badge badgeContent={2} style={{ fontSize: 25 }} color='secondary'>
                <ShoppingCartIcon />
            </Badge>
            {isMobileMenuOpen ? " " : <div className={classes.profileText} >cart</div>}
        </IconButton>
    )
}

export default CartIcon
