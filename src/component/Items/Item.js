import React, { useState, useReducer } from 'react';
import ItemCount from './ItemCount';
import DropDownList from './DropDownList';
import Styles from './styles/ItemStyle';
import { Box } from '@material-ui/core';
import Card from './Card'
import Third from './Images/Third.png'
import Second from './Images/Eight.png'
import First from './Images/Six.png'
import Fifth from './Images/Fifth.png'

export const DataContext = React.createContext()

const initialState = [
    {

        image: Third,
        title: 'Silk Thread Necklace',
        type: 'Silk collection',
        rating: '4.5',
        price: '1500'
    },
    {

        image: Second,
        title: 'Silk Thread Necklace',
        type: 'Silk collection',
        rating: '4.5',
        price: '1500'
    },
    {

        image: First,
        title: 'Silk Thread Necklace',
        type: 'Silk collection',
        rating: '4.5',
        price: '1500'
    },
    {

        image: Fifth,
        title: 'Silk Thread Necklace',
        type: 'Silk collection',
        rating: '4.5',
        price: '1500'
    },
    {

        image: Fifth,
        title: 'Silk Thread Necklace',
        type: 'Silk collection',
        rating: '4.5',
        price: '1500'
    },
    {

        image: First,
        title: 'Silk Thread Necklace',
        type: 'Silk collection',
        rating: '4.5',
        price: '1500'
    },
    {

        image: Second,
        title: 'Silk Thread Necklace',
        type: 'Silk collection',
        rating: '4.5',
        price: '1500'
    },
    {

        image: Third,
        title: 'Silk Thread Necklace',
        type: 'Silk collection',
        rating: '4.5',
        price: '1500'
    },

]

const reducer = (state, action) => {
    console.log("end")
}

function Item() {

    const [itemCount] = useState(30);
    const [sortBaseElement] = useState(['Price: Low to High', 'Price: High to Low', 'Newest Arrivals'])

    const classes = Styles()

    const [cardData, dispatch] = useReducer(reducer, initialState);

    return (
        <div className={classes.mainDiv}>
            <div className={classes.secondComponent}>
                <Box flexGrow={1} >
                    <ItemCount itemCount={itemCount} />
                </Box>
                <DropDownList sortBaseElement={sortBaseElement} />

            </div>

            <DataContext.Provider value={{ cardData, dispatch }}>
                <Card className={classes.cardDiv} />
            </DataContext.Provider>

        </div>

    )
}

export default Item
