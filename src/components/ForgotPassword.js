import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
    Grid,
    Paper,
    TextField,
    Button,
    Typography,
} from '@material-ui/core';
import AvatarImage from './Slice 1.png'; 

const ForgotPassword = () => {
    const paperStyle = { padding: 20, width: 300, margin: '0 auto' };
    const avatarStyle = { backgroundColor: '' }; 
    const btnstyle = { margin: '8px 0' };
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [emailError, setEmailError] = useState('');

    const sendOTP = () => {
        // Regular expression to validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');

            setOtpSent(true);
        }
    };

    const handleVerifyClick = () => {
        if (otpSent) {
            history.push('/verify-otp');
        }
    };

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    {}
                    <img src={AvatarImage} alt='Avatar' width={100} height={100} style={avatarStyle} />
                    <h2>Forgot Password</h2>
                    <Typography>
                        Enter your email address to receive a password reset OTP.
                    </Typography>
                </Grid>
                <TextField
    label='Email'
    placeholder='Enter your email'
    fullWidth
    required
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    error={emailError !== ''}
    helperText={emailError}
    autoComplete="email" 
/>
                {!otpSent ? (
                    <div>
                        <Button
                            type='button'
                            color='primary'
                            variant='contained'
                            onClick={sendOTP}
                            style={btnstyle}
                            fullWidth
                        >
                            Send OTP
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Typography>
                            An OTP has been sent to your email. Check your inbox.
                        </Typography>
                        <Button
                            type='button'
                            color='primary'
                            variant='contained'
                            onClick={handleVerifyClick}
                            style={btnstyle}
                            fullWidth
                        >
                            Verify
                        </Button>
                    </div>
                )}
                <Typography>
                    Remember your password?{' '}
                    <Link to='/login'>Sign In</Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default ForgotPassword;
