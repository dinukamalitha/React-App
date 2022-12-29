import {Component} from "react";
import React from "react";
import MyButton from "../../components/common/button";
import {withStyles} from "@mui/styles";
import error from "../../assets/imgs/error.jpeg";
import {Link} from "react-router-dom";

const styleSheet = () => ({
    container:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    imgContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "10px"
    }
});

class NotFound extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props;
        return(
            <div className={classes.container}>

                <div className={classes.imgContainer}>
                    <img src={error} alt="error"/>
                </div>

                <Link to="/">
                <MyButton
                    variant="contained"
                    label="Back to HomePage"
                />
                </Link>
            </div>
        )
    }
}

export default withStyles(styleSheet)(NotFound);