import {Component} from "react";
import React from "react";
import Typography from '@mui/material/Typography';
import UOM from '../../../assets/imgs/UOM.jpeg';

class Greeting extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <div>
                    <h1>Hello {this.props.name}!</h1>
                </div>
                <div>
                    <img src={UOM} alt="www.uom.lk"/>
                </div>
            </div>
        )
    }
}

export default Greeting;