import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    appBar: {
        padding: '0% 10% 0% 8%',
        backgroundColor: '#FEDBD1',
        position: "fixed",
        color: '#800000',
    },
    gridDiv: {
        display: 'flex',
    },
    grow: {
        flexGrow: 1
    },
    logo: {
        marginRight: theme.spacing(1),
        width: '40px',
        height: 'auto'
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 25,
        fontWeight: 600,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginRight: theme.spacing(4),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: '30%',
        },
    },
    searchIcon: {
        color: '#800000',
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'black',
    },

    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up('md')]: {
            width: '100ch'
        },
        opacity: 1,
        borderRadius: "4px"
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        }
    },

    profileIcon: {
        display: "flex",
        flexDirection: "column",
        marginRight: '7px'
    },

    cartIcon: {
        display: "flex",
        flexDirection: "column",
        marginLeft: '5px'
    },
    profileText: {
        fontSize: '11px',
        fontFamily: 'Roboto'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },

    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },

}));