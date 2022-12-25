import {Component, Fragment} from "react";
import React from "react";
import Greeting from "../../components/home/greeting";
import Counter from "../../components/home/counter";
import {Button, Divider} from "@mui/material";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Fragment>
                <Greeting name="World"/>
                <Divider light />
                <Counter/>
            </Fragment>
        )
    }
}

export default HomePage;
