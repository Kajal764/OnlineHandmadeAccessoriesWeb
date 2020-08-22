import React from 'react'
import Typography from '@material-ui/core/Typography';
import styles from './styles/ItemCountStyle';
import { Box } from "@material-ui/core";

function ItemCount({ itemCount }) {

    const classes = styles();

    return (
        <Typography component="div" className={classes.itemCountDiv}>
            <Box fontWeight={500} >
                Accessories  <span className={classes.itemMsg}>({itemCount} items)</span>
            </Box>
        </Typography>
    )
}

export default ItemCount
