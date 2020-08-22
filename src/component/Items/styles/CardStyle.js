import { makeStyles } from '@material-ui/core';

 export default makeStyles( (theme) => ({

        card: {
        flexGrow: 1,
        marginTop: 10
    },
    paper: {
        height: 300,
        width: 255,
        [theme.breakpoints.down(769)]: {
          width:182
        },
        [theme.breakpoints.down(451)] :{
            width:255
        }
    }
}
));