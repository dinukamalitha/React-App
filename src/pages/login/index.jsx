import {Component} from "react";
import React from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {TextField, Typography} from "@mui/material";
import MyButton from "../../components/common/button";
import SnackBar from "../../components/common/snackBar";

class LoginPage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            username: "admin",
            password: "123",
            formData: {
                username: "",
                password: ""
            },

            //snackbar props
            open: false,
            message: "",
            severity: ""
        }
    }

    validate(){
        console.log("Hello From Login Page!");
        console.log("Username:" + this.state.username);
        console.log("Password:" + this.state.password);
        console.log(this.state.formData);

        let formData = this.state.formData;
        if (formData.username === this.state.username && formData.password === this.state.password){
            console.log("Valid Login");
            this.setState({
                open: true,
                message: "Valid Login!",
                severity: "success"
            })
        }
        else {
            console.log("Invalid Login");
            this.setState({
                open: true,
                message: "Invalid Login!",
                severity: "error"
            })
        }
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
                            variant="outlined"
                            onChange={(e) => {
                                console.log(e.target.value);
                                let data = this.state.formData;
                                data.username = e.target.value;
                                this.setState({data});
                            }}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e) => {
                                console.log(e.target.value);
                                let data = this.state.formData;
                                data.password = e.target.value;
                                this.setState({data})
                            }}
                        />
                    </div>
                    <div className={classes.buttonContainer}>
                        <MyButton
                            label="Login"
                            onClick={() => {
                                this.validate();
                            }}
                        />
                    </div>
                </div>

                <SnackBar
                    open={this.state.open}
                    onClose={() => {
                        this.setState({open: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />

            </div>
        )
    }
}

export default withStyles (styleSheet)(LoginPage);