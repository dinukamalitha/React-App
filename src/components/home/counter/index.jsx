import {Component} from "react";
import React from "react";
import {Button, Typography} from "@mui/material";

class Counter extends Component{
    constructor(props) {
        super(props);
        //when the value of the state changes the element get re-rendered
        //state can be accessed with in that component only
        this.state = {
            count : 0
        }
    }

    increment() {
        console.log("Count Increase!")
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count : this.state.count - 1
        })
    }

    reset() {
        this.setState({
            count : 0
        })
    }

    render(){
        return(
            <div>
                <Typography variant="h5" gutterBottom>
                    Count : {this.state.count}
                </Typography>

                <Button variant="contained" onClick={()=>{
                    //alert("Hi, there!");
                    this.increment();
                }}>
                    Increase
                </Button>

                <Button variant="contained" onClick={()=>{
                    //alert("Hi, there!");
                    this.decrement();
                }}>
                    Decrease
                </Button>

                <Button variant="contained" onClick={()=>{
                    //alert("Hi, there!");
                    this.reset();
                }}>
                    Reset
                </Button>
            </div>
        )
    }
}

export default Counter;