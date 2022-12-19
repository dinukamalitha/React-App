import {Component} from "react";

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