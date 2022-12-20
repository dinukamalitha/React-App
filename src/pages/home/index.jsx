import {Component} from "react";
import React from "react";
import Greeting from "../../components/home/greeting";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
           <Greeting name="World"/>
        )
    }
}

export default HomePage;
