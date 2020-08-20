import React, { useState } from 'react';
import ItemCount from './ItemCount';
import DropDownList from './DropDownList';
import Styles from './styles/ItemStyle';
import { Box } from '@material-ui/core';

function Item() {

    const [itemCount] = useState(30);
    const [sortBaseElement] = useState(['Price: Low to High','Price: High to Low','Newest Arrivals'])

    const classes = Styles()

    return (
        <div className={classes.secondComponent}>
            <Box flexGrow={1}> 
            <ItemCount itemCount={itemCount}/>
            </Box>
            <DropDownList sortBaseElement={sortBaseElement} />
        </div>
    )
}

export default Item
