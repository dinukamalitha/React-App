import {Component} from "react";
import React from "react";
import Typography from '@mui/material/Typography';

class Greeting extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <div>
                    <Typography variant="h3" gutterBottom>
                        Hello World!
                    </Typography>
                </div>
                <div></div>
            </div>
        )
    }
}

export default Greeting;