import React, { useState  } from 'react';
import { Box, Select, MenuItem } from '@material-ui/core';
import InputLabel from "@material-ui/core/InputLabel";
import Styles from './styles/DropDownStyle';
import FormControl from "@material-ui/core/FormControl";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

function DropDownList({ sortBaseElement }) {

    const classes = Styles();

    const [sortKey, setSortKey] = useState('')

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: blueGrey[500],
            },
        },
        overrides: {
            MuiSelect: {
                select: {
                    "&:focus": {
                        backgroundColor: "rgb(255,255,255)"
                    },
                },
            }
            , MuiOutlinedInput:
                { input: { padding: "0 5px", } },
            MuiInputLabel: {
                formControl: {
                    top: -4
                }
            }
        }
    });

    const sortBy = sortBaseElement.map(element => {
        return <MenuItem     
            key={element}
            style={{ cursor: "pointer" }}
            value={element}
        >
             {element} 
        </MenuItem> 
    })

    const sortData = event => {
        setSortKey(event.target.value)
        console.log(event.target.value);
    }

    return (
        <Box fontWeight={500} m={1}>
            <MuiThemeProvider theme={theme}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel className={classes.inputLabel}>Sort by relevance</InputLabel>
                    <Select
                        value={sortKey}
                        onChange={sortData}
                        className={classes.select}
                        MenuProps={{
                            getContentAnchorEl: null,
                            anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'left'
                            }
                        }} >
                        {sortBy}
                    </Select>

                </FormControl>
            </MuiThemeProvider>
        </Box>
    )
}

export default DropDownList
