import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Grid,
    Paper,
    TextField,
    Button,
    Typography,
    InputAdornment,
    IconButton,
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import AvatarImage from './Slice 1.png';
import './styles.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = ({ handleChange }) => {
    const paperStyle = { padding: 20, height: 'auto', width: 300, margin: '0 auto' };
    const avatarStyle = { backgroundColor: '' };
    const btnstyle = { margin: '8px 0' };
    const initialValues = {
        username: '',
        password: '',
        remember: true,
    };
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('Please enter a valid email').required('Required'),
        password: Yup.string().required('Required'),
    });
    const onSubmit = (values, props) => {
        console.log(values);
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
                <Grid align='center'>
                    <img src={AvatarImage} alt='Avatar' width={100} height={100} style={avatarStyle} />
                    <h2><span className='highlight'>#</span> Happy Delights </h2>
                    <h5>Bringing the flavors of the world to your doorstep one bite at a time</h5>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field
                                as={TextField}
                                label='Username'
                                name='username'
                                placeholder='Enter username'
                                fullWidth
                                required
                                helperText={<ErrorMessage name='username' />}
                            />
                            <Field
                                as={TextField}
                                label='Password'
                                name='password'
                                placeholder='Enter password'
                                type={showPassword ? 'text' : 'password'}
                                fullWidth
                                required
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton onClick={togglePasswordVisibility}>
                                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                helperText={<ErrorMessage name='password' />}
                            />
                            <Field
                                as={FormControlLabel}
                                name='remember'
                                control={<Checkbox color='primary' />}
                                label='Remember me'
                            />
                            <Link to="/multi-slide-page"> {}
                                <Button
                                    type='submit'
                                    color='primary'
                                    variant='contained'
                                    disabled={props.isSubmitting}
                                    style={btnstyle}
                                    fullWidth
                                >
                                    {props.isSubmitting ? 'Loading' : 'Sign in'}
                                </Button>
                            </Link>
                        </Form>
                    )}
                </Formik>
                <Typography>
                    <Link to='/src/components/ForgotPassword.js' className='Link'>
                        Forgot password {' '}?
                    </Link>
                </Typography>
                <Typography>
                    Do you have an account ?{' '}
                    <Link to='/src/components/signup.js' onClick={() => handleChange('event', 1)}>
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default Login;
