import {Component} from "react";
import React from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import MyButton from "../../components/common/button";
import UOM from "../../assets/imgs/UOM.jpeg";

class Dashboard extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        let {classes} = this.props;
        return(
            <div className={classes.container}>

                <div className={classes.navbar}>
                    <div className={classes.navTitleContainer}>
                        <Typography variant="h4">Dashboard</Typography>
                    </div>
                    <div className={classes.navBtnContainer}>
                        <MyButton variant="contained" style= {{marginRight: '10px'}}>
                            Customer
                        </MyButton>
                        <MyButton variant="contained" style= {{marginRight: '10px'}}>
                            Items
                        </MyButton>
                    </div>
                </div>

                <div className={classes.dashboardBody}>
                        <Grid container spacing={0.5}>
                            <Grid item lg={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={UOM}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                UOM
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                University of Moratuwa is one of the leading universities in South Asia and the major Technical
                                                University in Sri Lanka.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item lg={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={UOM}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                UOM
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                University of Moratuwa is one of the leading universities in South Asia and the major Technical
                                                University in Sri Lanka.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            <Grid item lg={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={UOM}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                UOM
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                University of Moratuwa is one of the leading universities in South Asia and the major Technical
                                                University in Sri Lanka.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Dashboard);