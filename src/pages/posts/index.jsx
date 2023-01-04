import {Component, Fragment} from "react";
import React from "react";
import {Grid, TextField, Typography} from "@mui/material";
import MyButton from "../../components/common/button";
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import SnackBar from "../../components/common/snackBar";
import postService from "../../services/postService";
import PostService from "../../services/postService";
import {DataGrid} from "@mui/x-data-grid";

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userId: "",
                id: "",
                title: "",
                body: ""
            },

            //snackbar props
            open: false,
            message: "",
            severity: "",

            //for table
            column: [
                {field: 'userId', headerName: 'User Id', type: 'number', width: 70},
                {field: 'id', headerName: 'Id', type: 'number', width: 130},
                {field: 'title', headerName: 'Title', width: 130},
                {field: 'body', headerName: 'Body', width: 130}
            ]
        }
    }

    async loadData(){
        let res = await PostService.fetchPosts();
        if (res.status === 200){
            console.log("res:" + JSON.stringify(res));
        }
        else{
            console.log("error:" + res);
        }
    }

    componentDidMount() {
        console.log("Component Mounted");
        this.loadData();
    }

    handleSubmit = async () =>{
        console.log("Saved");
        console.log(this.state.formData);
        let formData = this.state.formData;
        let response = await postService.createPost(formData);
        if (response.status === 201){
            this.setState({
                open: true,
                message: 'Post Created Successfully',
                severity: 'success'
            })
        }
        else{
            this.setState({
                open: true,
                message: 'Post Creation Unsuccessful',
                severity: 'error'
            })
        }
    }



    render() {
        return(
            <Fragment>
                <Typography variant="h4">
                    Poster Manage
                </Typography>
                <ValidatorForm
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                <Grid container spacing={0.5}>
                    <Grid item xs={6} md={6} xm={6} lg={6}>
                        <Typography variant="body2"> User Id: </Typography>
                        <TextValidator
                            id="outlined-basic"
                            label=""
                            variant="outlined"
                            style={{width:'100%'}}
                            value={this.state.formData.userId}
                            onChange={(e) =>{
                                let formData = this.state.formData;
                                formData.userId = e.target.value;
                                this.setState({formData})
                            }}
                            validators = {["required"]}
                        />
                    </Grid>
                    <Grid item xs={6} md={6} xm={6} lg={6}>
                        <Typography variant="body2"> Id: </Typography>
                        <TextValidator
                            id="outlined-basic"
                            label=""
                            variant="outlined"
                            style={{width:'100%'}}
                            value={this.state.formData.id}
                            onChange={(e) =>{
                                let formData = this.state.formData;
                                formData.id = e.target.value;
                                this.setState({formData})
                            }}
                            validators = {["required"]}
                        />
                    </Grid>
                    <Grid item xs={6} md={6} xm={6} lg={6}>
                        <Typography variant="body2"> Title: </Typography>
                        <TextValidator
                            id="outlined-basic"
                            label=""
                            variant="outlined"
                            style={{width:'100%'}}
                            value={this.state.formData.title}
                            onChange={(e) =>{
                                let formData = this.state.formData;
                                formData.title = e.target.value;
                                this.setState({formData})
                            }}
                            validators = {["required"]}
                        />
                    </Grid>
                    <Grid item xs={6} md={6} xm={6} lg={6}>
                        <Typography variant="body2"> Body: </Typography>
                        <TextValidator
                            id="outlined-basic"
                            label=""
                            variant="outlined"
                            style={{width:'100%'}}
                            value={this.state.formData.body}
                            onChange={(e) =>{
                                let formData = this.state.formData;
                                formData.body = e.target.value;
                                this.setState({formData})
                            }}
                            validators = {["required"]}
                        />
                    </Grid>
                    <Grid
                        item xs={12} md={12} xm={12} lg={12}
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                    >
                        <MyButton variant="contained" label="Save" type="submit"/>
                    </Grid>
                </Grid>
                </ValidatorForm>

                <Grid container spacing={0.5}>
                    {/*<DataGrid*/}
                    {/*    // rows={rows}*/}
                    {/*    columns={this.state.column}*/}
                    {/*    pageSize={5}*/}
                    {/*    rowsPerPageOptions={[5]}*/}
                    {/*    checkboxSelection*/}
                    {/*/>*/}
                </Grid>

                <SnackBar
                    open={this.state.open}
                    onClose={() => {
                        this.setState({open: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </Fragment>
        )
    }
}

export default Posts;