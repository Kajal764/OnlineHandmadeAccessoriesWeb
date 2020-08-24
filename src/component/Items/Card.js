import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import Styles from './styles/CardStyle'
import { DataContext } from './Item'
import ImageMediaCard from './ImageMediaCard'

function Card() {
    const classes = Styles();

    const dataContext = useContext(DataContext)

    return (
        <div>
            <Grid container className={classes.card} >
                <Grid item xs={12}>
                    <Grid container justify="flex-start" spacing={3}>
                        {dataContext.cardData.map((value, index) => (
                            <Grid key={index} item>
                                <ImageMediaCard value={value} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Card
