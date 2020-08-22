import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import Styles from './styles/CardStyle'

function Card({ data }) {
    const classes = Styles();

    return (
        <div>
            <Grid container className={classes.card} >
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={3}>
                        {data.map((value) => (
                            <Grid key={value} item>
                                <Paper className={classes.paper}></Paper>
                            </Grid>
                        ))}

                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Card
