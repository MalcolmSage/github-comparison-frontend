import * as React from 'react';
import "../styles/App.css"

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
// import clsx from 'clsx';
// import { useSwitch } from '@mui/base/SwitchUnstyled';
import { Alert } from '@mui/material';

// const blue = {
//     500: '#007FFF',
// };

// const grey = {
//     400: '#BFC7CF',
//     500: '#AAB4BE',
//     600: '#6F7E8C',
// };

// const BasicSwitchRoot = styled('span')(
//     ({ theme }) => `
// font-size: 0;
// position: relative;
// display: inline-block;
// width: 40px;
// height: 20px;
// margin: 10px;
// background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
// border-radius: 10px;
// cursor: pointer;

// &.Switch-disabled {
//     opacity: 0.4;
//     cursor: not-allowed;
// }

// &.Switch-checked {
//     background: ${blue[500]};
// }
// `,
// );

// const BasicSwitchInput = styled('input')`
// cursor: inherit;
// position: absolute;
// width: 100%;
// height: 100%;
// top: 0;
// left: 0;
// opacity: 0;
// z-index: 1;
// margin: 0;
// `;

// const BasicSwitchThumb = styled('span')`
// display: block;
// width: 14px;
// height: 14px;
// top: 3px;
// left: 3px;
// border-radius: 16px;
// background-color: #fff;
// position: relative;
// transition: all 200ms ease;

// &.Switch-focusVisible {
//     background-color: ${grey[500]};
//     box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
// }

// &.Switch-checked {
//     left: 22px;
//     top: 3px;
//     background-color: #fff;
// }
// `;

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

// function BasicSwitch(props) {
//     const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

//     const stateClasses = {
//         'Switch-checked': checked,
//         // 'Switch-disabled': disabled,
//         // 'Switch-focusVisible': focusVisible,
//     };
//     console.log(stateClasses)
//     return (
//         <BasicSwitchRoot className={clsx(stateClasses)}>
//             <BasicSwitchThumb className={clsx(stateClasses)} />
//             <BasicSwitchInput {...getInputProps()} aria-label="Search method switch" />
//         </BasicSwitchRoot>
//     );
// }

export default function SearchAppBar(props) {
    const { onSubmit, user, repo, onChangeRepo, onChangeUser, statusCode } = props

    return (
        <AppBar position="static" className="secondaryBackground" >
            <Toolbar>
                {/* <BasicSwitch defaultChecked /> */}
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
            {/* {statusCode === 404 ? <Alert variant="filled" severity="warning">This is a warning alert — check it out!</Alert> : ""} */}
        </AppBar>
    );
}
