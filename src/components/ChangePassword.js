import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import {
    Grid,
    Paper,
    TextField,
    Button,
    Typography,
} from '@material-ui/core';
import AvatarImage from './Slice 1.png'; 

const ChangePassword = () => {
    const paperStyle = { padding: 20, width: 300, margin: '0 auto' };
    const avatarStyle = { backgroundColor: '' }; 
    const btnstyle = { margin: '8px 0' };
    const history = useHistory(); 

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [changePasswordError, setChangePasswordError] = useState('');

    const handleChangePassword = () => {
        // Password validation logic
        if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[@#$%]/.test(password)) {
            setPasswordError('Password must include at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character (e.g., @#$%).');
        } else {
            setPasswordError('');
        }

        // Confirm password validation logic
        if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match.');
        } else {
            setConfirmPasswordError('');
        }

        // If both password and confirm password are valid, change password
        if (passwordError === '' && confirmPasswordError === '') {
           
            history.push('/password-change-success'); // Redirect to PasswordChangeSuccess
        } else {
            setChangePasswordError('Please correct the errors above before changing your password.');
        }
    };

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    {}
                    <img src={AvatarImage} alt='Avatar' width={100} height={100} style={avatarStyle} />
                    <h2>Change Password</h2>
                    <Typography>
                        Enter your new password.
                    </Typography>
                </Grid>
                <TextField
                    label='New Password'
                    placeholder='Enter new password'
                    fullWidth
                    required
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password" 
                    error={passwordError !== ''}
                    helperText={passwordError || 'Use at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character (e.g., @#$%).'}
                />
                <TextField
                    label='Confirm Password'
                    placeholder='Confirm new password'
                    fullWidth
                    required
                    type='password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={confirmPasswordError !== ''}
                    helperText={confirmPasswordError || 'Re-enter your new password.'}
                />
                {}
                <Button
                    type='button'
                    color='primary'
                    variant='contained'
                    onClick={handleChangePassword}
                    style={btnstyle}
                    fullWidth
                >
                    Change Password
                </Button>
                {changePasswordError && (
                    <Typography color='error'>
                        {changePasswordError}
                    </Typography>
                )}
                <Typography>
                    Remember your password?{' '}
                    <Link to='/login'>Sign In</Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default ChangePassword;
