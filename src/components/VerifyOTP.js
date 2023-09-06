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

const VerifyOTP = () => {
    const paperStyle = { padding: 20, width: 300, margin: '0 auto' };
    const avatarStyle = { backgroundColor: '' }; 
    const btnstyle = { margin: '8px 0' };
    const history = useHistory();

    const [otp, setOtp] = useState('');
    const [otpError, setOtpError] = useState('');

    const handleVerifyClick = () => {
        // Regular expression to match exactly 6 digits
        const otpPattern = /^\d{6}$/;

        if (!otpPattern.test(otp)) {
            setOtpError('OTP should be exactly 6 digits');
        } else {
            setOtpError('');
            history.push('/src/components/ChangePassword.js');
        }
    };

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    {}
                    <img src={AvatarImage} alt='Avatar' width={100} height={100} style={avatarStyle} />
                    <h2>Verify OTP</h2>
                    <Typography>
                        Enter the OTP code sent to your email to verify.
                    </Typography>
                </Grid>
                <TextField
                    label='OTP Code'
                    placeholder='Enter OTP code'
                    fullWidth
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    error={otpError !== ''}
                    helperText={otpError}
                />
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
                <Typography>
                    Remember your password?{' '}
                    <Link to='/login'>Sign In</Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default VerifyOTP;
