import React from 'react'
import Card from '@material-ui/core/Card';
import Styles from './styles/ImageMediaCardStyle'
import { CardMedia, CardContent, Typography } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Grid } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip';

function ImageMediaCard({ value }) {

    const classes = Styles()

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <Grid container justify="center" className={classes.imageDiv}>
                    <Tooltip title="Quick view">
                        <CardMedia
                            component="img"
                            alt="accessories"
                            className={classes.media}
                            image={value.image}
                        />
                    </Tooltip>
                </Grid>
                <CardContent >
                    <Typography className={classes.title}>
                        {value.title}
                    </Typography>
                    <Typography className={classes.type}>
                        {value.type}
                    </Typography>
                    <Typography className={classes.rating}>
                        {value.rating}
                    </Typography>
                    <Typography className={classes.price}>
                        Rs. {value.price}
                    </Typography>
                </CardContent>



            </CardActionArea>
        </Card>
    )
}

export default ImageMediaCard
