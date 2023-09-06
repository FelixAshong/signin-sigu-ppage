import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Grid,
    Paper,
    Typography,
    TextField,
    Button,
    FormControlLabel,
    FormControl,
    Checkbox,
    InputAdornment,
    IconButton,
} from '@material-ui/core';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormHelperText } from '@material-ui/core';
import * as Yup from 'yup';

import AvatarImage from './Slice 1.png';
import './styles.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: '0 auto' };
    const avatarStyle = { backgroundColor: '' };
    const marginTop = { marginTop: 5 };
    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '+233 ',
        password: '',
        confirmPassword: '',
        termsAndConditions: false,
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required('Required'),
        email: Yup.string().email('Enter valid email').required('Required'),
        phoneNumber: Yup.number().typeError('Enter valid Phone Number').required('Required'),
        password: Yup.string().min(8, 'Password minimum length should be 8').required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password not matched').required('Required'),
        termsAndConditions: Yup.string().oneOf(['true'], 'Accept terms & conditions'),
    });
    const onSubmit = (values, props) => {
        console.log(values);
        console.log(props);
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
        }, 2000);
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center">
                    <img src={AvatarImage} alt="Avatar" width={100} height={100} style={avatarStyle} />
                    <h2><span className="highlight">#</span>Your Culinary Journey </h2>
                    <h5>Explore a World of Tastes from the Comfort of Home, One Bite at a Time</h5>
                    <Typography variant="caption" gutterBottom>
                        Please fill this form to create an account!
                    </Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} fullWidth name="name" label="Name" placeholder="Enter your name" helperText={<ErrorMessage name="name" />} />
                            <Field as={TextField} fullWidth name="email" label="Email" placeholder="Enter your email" helperText={<ErrorMessage name="email" />} />
                            <FormControl component="fieldset" style={marginTop}>
                            </FormControl>
                            <Field as={TextField} fullWidth name="phoneNumber" label="Phone Number" placeholder="Enter your phone number" helperText={<ErrorMessage name="phoneNumber" />} />
                            <Field
                                as={TextField}
                                fullWidth
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                label="Password"
                                placeholder="Enter your password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={togglePasswordVisibility}>
                                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                helperText={<ErrorMessage name="password" />}
                            />
                            <Field as={TextField} fullWidth name="confirmPassword" type="password" label="Confirm Password" placeholder="Confirm your password" helperText={<ErrorMessage name="confirmPassword" />} />
                            <FormControlLabel
                                control={<Field as={Checkbox} color='primary' name="termsAndConditions" />}
                                label="I accept the terms and conditions."
                            />
                            <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                            <Link to="/multi-slide-page"> {}
                                <Button type="submit" variant="contained" disabled={props.isSubmitting} color="primary">
                                    {props.isSubmitting ? 'Loading' : 'Sign up'}
                                </Button>
                            </Link>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    );
};

export default Signup;
