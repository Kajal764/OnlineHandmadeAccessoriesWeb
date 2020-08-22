import React, { useState } from 'react';
import ItemCount from './ItemCount';
import DropDownList from './DropDownList';
import Styles from './styles/ItemStyle';
import { Box } from '@material-ui/core';
import Card from './Card'

function Item() {

    const [itemCount] = useState(30);
    const [sortBaseElement] = useState(['Price: Low to High', 'Price: High to Low', 'Newest Arrivals'])
    const [data] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

    const classes = Styles()

    return (
        <div className={classes.mainDiv}>
            <div className={classes.secondComponent}>
                <Box flexGrow={1} >
                    <ItemCount itemCount={itemCount} />
                </Box>
                <DropDownList sortBaseElement={sortBaseElement} />

            </div>
            <Card className={classes.cardDiv} data={data} />
        </div>

    )
}

export default Item
