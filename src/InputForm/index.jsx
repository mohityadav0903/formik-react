import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string("Enter a name").required("Name is required"),
    address : Yup.string("Enter your address").required("Address is required"),
    country : Yup.string("Select your country").required("Country is required"),
    gender : Yup.string().required("Gender is required"),
    hobbies : Yup.array().required("atleast one hobby is required"),
});


const styles = theme => ({
 paper: {
   marginTop: theme.spacing(8),
   display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
 },
 container: {
   maxWidth: "600px",
 }
});

const InputForm = (props) => {
    const { classes } = props;
    const values = {name:"", address :"",country :"India", gender :"male", hobbies :[]};
    
    return (
  <React.Fragment>
      <div className={classes.container}>
          <Paper elevation={1} className={classes.paper}>
          <h1>Form</h1>
          <Formik
             children={props => <Form {...props} />}
                initialValues={values}  
                validationSchema={validationSchema}
                validateOnMount={true}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitting(true);
                   console.log(values);
                   resetForm();
                     setSubmitting(false);
                }}

            />
          </Paper>
      </div>
  </React.Fragment>
    );
};

export default withStyles(styles)(InputForm);