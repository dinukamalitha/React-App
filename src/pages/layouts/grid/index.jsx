import {Component, Fragment} from "react";
import React from "react";
import {Autocomplete, Grid, TextField, Typography} from "@mui/material";
import MyButton from "../../../components/common/button";

class GridLayout extends Component{
    constructor(props) {
        super(props);
        this.state = {
            gender: [
                {label: 'Male'},
                {label: 'Female'}
            ]
        }
    }

    render() {
        return(
            <Fragment>
                <Typography variant="h4">
                    Customer Details
                </Typography>
                <Grid container spacing={0.5}>
                    <Grid item xs={6} md={6} xm={6} lg={6}>
                        <Typography variant="h5"> Customer Name: </Typography>
                        <TextField id="outlined-basic" label="" variant="outlined"
                        style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={6} md={6} xm={6} lg={6}>
                        <Typography variant="h5"> Address: </Typography>
                        <TextField id="outlined-basic" label="" variant="outlined"
                        style={{width:'100%'}}/>
                    </Grid>
                    <Grid item xs={6} md={6} xm={6} lg={6}>
                        <Typography variant="h5"> Gender: </Typography>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.gender}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Gender" />}
                            style={{width:'100%'}}
                        />
                    </Grid>
                    <Grid item xs={6} md={6} xm={6} lg={6}>
                        <Typography variant="h5"> NIC: </Typography>
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
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

export default GridLayout;