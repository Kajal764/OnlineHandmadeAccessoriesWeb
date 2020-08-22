import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainDiv: {
        paddingTop: '75px',
        paddingLeft: '10%',
        paddingRight: '10%',
        justifyContent: "center"
    },

    secondComponent: {
        display: 'flex',
        [theme.breakpoints.down('451')]: {
            flexDirection: "column",

        },
        marginTop: '10px',
        marginBottom: '20px'
    }
}))