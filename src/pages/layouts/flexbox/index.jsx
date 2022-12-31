import {Component} from "react";
import React from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./styles";
import {Typography} from "@mui/material";

class FlexBox extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props;
        return(
            <div className={classes.container}>
                <div className={classes.titleContainer}>
                    <Typography variant="h4">
                        This is Title
                    </Typography>
                </div>
                <div className={classes.formContainer}>
                    <div className={classes.leftForm}></div>
                    <div className={classes.rightForm}></div>
                </div>
                <div className={classes.buttonContainer}></div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(FlexBox);