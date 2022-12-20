import {Component} from "react";
import React from "react";
import {Typography} from "@mui/material";
import UOM from '../../../assets/imgs/UOM.jpeg';
import {styleSheet} from "./styles";
import {withStyles} from "@mui/styles";

class Greeting extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        const {classes} = this.props;
        return(
            <div className={classes.container}>
                <div>
                    <Typography variant="h3" gutterBottom>
                        Hello {this.props.name}
                    </Typography>
                </div>
                <div>
                    <img src={UOM} alt="www.uom.lk"/>
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet) (Greeting);