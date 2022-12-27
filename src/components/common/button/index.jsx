import {Component} from "react";
import React from "react";
import {Button} from "@mui/material";
import PropTypes from "prop-types";

class MyButton extends Component{
    static propTypes = {
        onClick: PropTypes.func,
        Children: PropTypes.node,
        variant: PropTypes.string,
        className: PropTypes.any,
        label: PropTypes.string,
        size: PropTypes.string,
        disabled: PropTypes.bool,
        color: PropTypes.string,
        type: PropTypes.string,
        endIcon: PropTypes.string,
        startIcon: PropTypes.string,
    }

    static defaultProps = {
        className: "",
        color: "primary",
        label: "",
        size: "medium",
        variant: "contained",
        disabled: false,
        type: "button"
    }

    handleButtonClick = (event) => {
        const {onClick, disabled} = this.props;
        if (disabled) return;

        onClick && onClick({event});
    }

    renderChildren = (label, children) => {
        if (label) return label;
        if (children) return children;
    }

    render(){
        const {
            children,
            label,
            className,
            type,
            color,
            size,
            variant,
            disabled,
            startIcon,
            endIcon,
            style,
        } = this.props;

        return(
            <Button
                className={className}
                type={type}
                color={color}
                size={size}
                endIcon={endIcon}
                startIcon={startIcon}
                variant={variant}
                disabled={disabled}
                style={style}
                onClick={this.handleButtonClick}
            >
                {this.renderChildren(label,children)}
            </Button>
        )
    }
}

export default MyButton;
