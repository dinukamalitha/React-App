import {Component} from "react";
import React from "react";
import {Typography} from "@mui/material";

class Counter extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <Typography variant="h5" gutterBottom>
                    Count : 0
                </Typography>
            </div>
        )
    }
}

export default Counter;