import * as React from 'react';
import "../styles/App.css"

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Alert } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function SearchAppBar(props) {
    const { onSubmit, user, repo, onChangeRepo, onChangeUser, statusCode } = props

    return (
        <AppBar position="static" className="secondaryBackground" >
            <Toolbar>
                <Search className="textColor">
                    <form onSubmit={onSubmit}>
                        <StyledInputBase
                            placeholder="Username"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={onChangeUser}
                            value={user}
                        />
                    </form>
                </Search>
                <Typography
                    variant="h3"
                    className="textColor"
                    sx={{ padding: 1 }}
                >
                    /
                </Typography>
                <Search className="textColor">
                    <form onSubmit={onSubmit}>
                        <StyledInputBase
                            placeholder="Repository"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={onChangeRepo}
                            value={repo}
                        />
                    </form>
                </Search>
                <Typography
                    variant="h4"
                    className="textColor"
                    sx={{ paddingLeft: 2, display: { xs: "none", md: 'none', lg: 'block' } }}
                >
                    Github Repository Inspection Tool
                </Typography>
                <Typography
                    variant="h4"
                    className="textColor"
                    sx={{ paddingLeft: 2, display: { sm: 'block', lg: "none" } }}
                >
                    GRIT
                </Typography>
            </Toolbar>
            {statusCode === 404 ? <Alert variant="filled" severity="error">Something went wrong! Please check the username and repository</Alert> : ""}
        </AppBar>
    );
}
