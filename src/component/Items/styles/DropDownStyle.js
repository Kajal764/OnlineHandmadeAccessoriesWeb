import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) =>({
    
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 190,
        // marginLeft: "0%",
        background: "white",
        // display:"flex",
      },
      select:{
        // borderColor: '#800000',
       
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