import {Component} from "react";
import React from "react";
import {Typography} from "@mui/material";
import MyButton from "../../common/button";

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

                {/*<Button variant="contained" onClick={()=>{*/}
                {/*    //alert("Hi, there!");*/}
                {/*    this.increment();*/}
                {/*}}>*/}
                {/*    Increase*/}
                {/*</Button>*/}

                {/*<Button variant="contained" color="success" onClick={()=>{*/}
                {/*    //alert("Hi, there!");*/}
                {/*    this.decrement();*/}
                {/*}}*/}
                {/*        style={{marginLeft : '20px'}}*/}
                {/*>*/}
                {/*    Decrease*/}
                {/*</Button>*/}

                {/*<Button variant="contained" color="error" onClick={()=>{*/}
                {/*    //alert("Hi, there!");*/}
                {/*    this.reset();*/}
                {/*}}*/}
                {/*        style={{marginLeft : '20px'}}*/}
                {/*>*/}
                {/*    Reset*/}
                {/*</Button>*/}

                <MyButton
                    variant = "contained"
                    onClick={()=>{
                        this.increment();
                    }}
                >
                    Increase
                </MyButton>

                <MyButton
                    variant = "contained"
                    color = "success"
                    style = {{marginLeft : '20px'}}
                    onClick={()=>{
                        this.decrement();
                    }}
                >
                    Decrease
                </MyButton>

                <MyButton
                    variant = "contained"
                    color = "error"
                    style = {{marginLeft : '20px'}}
                    onClick={()=>{
                        this.reset();
                    }}
                >
                    Reset
                </MyButton>
            </div>
        )
    }
}

export default Counter;