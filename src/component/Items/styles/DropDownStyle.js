import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) =>({
    
    formControl: {
        minWidth: 190,
        background: "white",
      },
      select:{
          '&:before': {
              borderColor: '#800000',
          },
          '&:after': {
              borderColor: '#800000',
          }
      ,
        marginTop: theme.spacing(),
        height: "30px",
      },
      inputLabel:{
        color: '#800000',
        fontFamily: 'Roboto',
      }
}))