import React from 'react'
import Styles from './styles/headerStyle';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

function ProfileIcon({ menuId ,isMobileMenuOpen }) {
    const classes = Styles();

    return (
        <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            color="inherit"
            classes={{ label: classes.profileIcon }}
        >
            <AccountCircle style={{ fontSize: 25 }} />
            {isMobileMenuOpen ? "" : <div className={classes.profileText} >profile</div>}
        </IconButton>
    )
}

export default ProfileIcon
