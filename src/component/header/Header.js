import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Styles from './styles/headerStyle';
import Logo from './images/logo.png'
import { Grid } from '@material-ui/core';
import ProfileIcon from './ProfileIcon';
import CartIcon from './CartIcon';

export default function Header() {
  
  const classes = Styles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <CartIcon isMobileMenuOpen={isMobileMenuOpen}/>
        <p>Cart</p>
      </MenuItem>
      <MenuItem>
        <ProfileIcon menuId={menuId} isMobileMenuOpen={isMobileMenuOpen} />
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Grid className={classes.gridDiv}>
            <img className={classes.logo} src={Logo} alt="logo" />
            <Typography className={classes.title} variant="h6" noWrap>
              Priya Creations
          </Typography>
          </Grid>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <ProfileIcon menuId={menuId} isMobileMenuOpen={isMobileMenuOpen} />
            <CartIcon isMobileMenuOpen={isMobileMenuOpen} />
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon style={{ color: '#800000' }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
    </div>
  );
}
