import {Component} from "react";
import React from "react";
import PropTypes from "prop-types";
import Snackbar from '@mui/material/Snackbar';
import {Alert} from "@mui/material";

class SnackBar extends Component{
    static propTypes = {
        open: PropTypes.bool,
        className: PropTypes.string,
        message: PropTypes.string,
        anchorOrigin: PropTypes.object,
        children: PropTypes.node,
        severity: PropTypes.string,
        autoHideDuration: PropTypes.number
    }

    static defaultProps = {
        open: false,
        className: "",
        message: "",
        name: "MySnackbar",
        severity: "success",
        autoHideDuration: 3000,
        anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
        },
        variant: "filled"
    }

    handleButtonClose = (event) => {
        const {onClose} = this.props;
        onClose && onClose({event});
    }

    renderChildren = (message, children) => {
        if (message) return message;
        if (children) return children;
    }

    render() {
        const {
            open,
            className,
            message,
            name,
            children,
            severity,
            autoHideDuration,
            anchorOrigin,
            variant
        } = this.props;

        return(
            <Snackbar
                open={open}
                className={className}
                autoHideDuration={autoHideDuration}
                anchorOrigin={anchorOrigin}
                onClose={this.handleButtonClose}
            >
                <Alert variant={variant} severity={severity} onClose={this.handleButtonClose}>
                    {this.renderChildren(message,children)}
                </Alert>
            </Snackbar>

        )

    }

}

export default SnackBar;