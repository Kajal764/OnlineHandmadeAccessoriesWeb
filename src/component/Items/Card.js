import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import Styles from './styles/CardStyle'

function Card() {
    const classes = Styles();

    return (
        <div>
            <Grid container className={classes.card} >
                <Grid item xs={12}>
                    <Grid container justify="flex-start" spacing={2}>
                        <Grid key={1} item>
                            <Paper className={classes.paper}></Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Card
