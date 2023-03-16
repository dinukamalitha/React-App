import {Component} from "react";
import React from "react";
import {styleSheet} from "./styles";
import {withStyles} from "@mui/styles";
import {AppBar, Autocomplete, Button, Grid, IconButton, TextField, Toolbar, Typography} from "@mui/material";
import MyButton from "../../components/common/button";
import {Link} from "react-router-dom";
import MyTable from "../../components/common/table";

class Customer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            gender: [
                {label: 'Male'},
                {label: 'Female'}
            ],

            formData: {
                customerName: '',
                gender: '',
                nic: '',
                email: ''
            },
        }
    }

    loadData(){

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
                        Customer Info:
                    </Typography>
                    <Grid container spacing={0.5}>
                        <Grid item xs={12} md={12} xm={6} lg={6}>
                            <Typography variant="body2"> Customer Name: </Typography>
                            <TextField
                                id="outlined-basic"
                                label=""
                                variant="outlined"
                                style={{width:'100%'}}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} xm={6} lg={6}>
                            <Typography variant="body2"> Gender: </Typography>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={this.state.gender}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} />}
                                style={{width:'100%'}}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} xm={6} lg={6}>
                            <Typography variant="body2"> NIC: </Typography>
                            <TextField
                                id="outlined-basic"
                                label=""
                                variant="outlined"
                                style={{width:'100%'}}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} xm={6} lg={6}>
                            <Typography variant="body2"> E-Mail: </Typography>
                            <TextField
                                id="outlined-basic"
                                label=""
                                variant="outlined"
                                style={{width:'100%'}}
                            />
                        </Grid>
                        <Grid
                            item xs={12} md={12} xm={12} lg={12}
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <MyButton
                                variant="contained"
                                label="Save"
                                onClick={() => {
                                    this.loadData()
                                }}
                            />
                            <MyButton variant="contained" label="Clear" style={{margin:'10px'}}/>
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.table}>
                    {/*<MyTable*/}
                    {/*    rows={""}*/}
                    {/*    columns={""}*/}
                    {/*    pageSize={5}*/}
                    {/*    rowsPerPageOptions={[5]}*/}
                    {/*/>*/}
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Customer);