import {Component} from "react";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Hello From HomePage</h1>
                <h2>This is my first application with {this.props.name}</h2>
                <h3>I love {this.props.type} Development</h3>
            </div>
        )
    }
}

export default HomePage;
