import {Component} from "react";
import React from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {TextField, Typography} from "@mui/material";
import MyButton from "../../components/common/button";

class LoginPage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <div className={classes.loginCover}>
                    <div className={classes.titleContainer}>
                        <Typography variant="h4">
                            Login
                        </Typography>
                    </div>
                    <div className={classes.formContainer}>
                        <TextField
                            id="outlined-basic"
                            label="Username"
                            variant="outlined" />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                    </div>
                    <div className={classes.buttonContainer}>
                        <MyButton label="Login" />
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles (styleSheet)(LoginPage);