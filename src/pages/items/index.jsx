import {Component} from "react";
import React from "react";
import {styleSheet} from "./styles";
import {withStyles} from "@mui/styles";
import { AppBar, Grid, IconButton, TextField, Toolbar, Typography } from "@mui/material";
import MyButton from "../../components/common/button";
import {Link} from "react-router-dom";

class Items extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props;
        return(
            <div className={classes.container}>

                <AppBar position="static" color="success">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Dashboard
                        </Typography>
                        <div className={classes.navBtnContainer}>

                            <Link to="/customer">
                                <MyButton variant="contained" color="error" style= {{marginRight: '10px'}}>
                                    Customer
                                </MyButton>
                            </Link>

                            <Link to="/item">
                                <MyButton variant="contained" color="error" style= {{marginRight: '10px'}}>
                                    Items
                                </MyButton>
                            </Link>

                        </div>
                    </Toolbar>
                </AppBar>

                <div className={classes.body}>
                    <Typography variant="h6">
                        Item Info:
                    </Typography>
                    <Grid container spacing={0.5}>
                        <Grid item xs={6} md={6} xm={6} lg={6}>
                            <Typography variant="body2"> Item Name: </Typography>
                            <TextField id="outlined-basic" label="" variant="outlined"
                                       style={{width:'100%'}}/>
                        </Grid>
                        <Grid item xs={6} md={6} xm={6} lg={6}>
                            <Typography variant="body2"> Item Code: </Typography>
                            <TextField id="outlined-basic" label="" variant="outlined"
                                       style={{width:'100%'}}/>
                        </Grid>
                        <Grid item xs={6} md={6} xm={6} lg={6}>
                            <Typography variant="body2"> Qty: </Typography>
                            <TextField id="outlined-basic" label="" variant="outlined"
                                       style={{width:'100%'}}/>
                        </Grid>
                        <Grid item xs={6} md={6} xm={6} lg={6}>
                            <Typography variant="body2"> Unit Price: </Typography>
                            <TextField id="outlined-basic" label="" variant="outlined"
                                       style={{width:'100%'}}/>
                        </Grid>
                        <Grid
                            item xs={12} md={12} xm={12} lg={12}
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <MyButton variant="contained" label="Save"/>
                            <MyButton variant="contained" label="Clear" style={{margin:'10px'}}/>
                        </Grid>
                    </Grid>
                </div>

            </div>
        )
    }
}

export default withStyles(styleSheet)(Items);