import {Component, Fragment} from "react";
import React from "react";
import Greeting from "../../components/home/greeting";
import Counter from "../../components/home/counter";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <Fragment>
                <Greeting name="World"/>
                <Counter/>
            </Fragment>
        )
    }
}

export default HomePage;
