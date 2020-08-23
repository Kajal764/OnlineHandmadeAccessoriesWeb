import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    card: {
        width: 255,
        height: 330,
        [theme.breakpoints.down(769)]: {
            width: 182
        },
        [theme.breakpoints.down(451)]: {
            width: 255
        }
    },
    media: {
        objectFit: 'cover',
        marginTop: 10,
        marginBottom: 10,
        height: 200,
        width: 200
    },
    imageDiv: {
        backgroundColor: '#F5F5F5'
    },
    title: {
        fontFamily: 'Arial',
        fontSize: '14px',
        display: 'inline-block',
        whiteSpace: "nowrap"
    },
    type: {
        fontFamily: 'Arial',
        fontSize: '11px',
        color: 'rgb(119, 119, 119)'
    },
    price: {
        fontWeight: "bold",
        fontFamily: 'Times New Roman',
        fontSize: '13px',
        marginBottom: '10px'
    }
}))