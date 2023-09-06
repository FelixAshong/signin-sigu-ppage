import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import AvatarImage from './Slice 1.png'; 

const PasswordChangeSuccess = () => {
    const paperStyle = { padding: 20, width: 300, margin: '0 auto' };
    const avatarStyle = { backgroundColor: '' }; 
    const btnstyle = { margin: '8px 0' };

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    {}
                    <img src={AvatarImage} alt='Avatar' width={100} height={100} style={avatarStyle} />
                    <h2>Password Changed Successfully</h2>
                    <Typography>
                        Your password has been changed successfully.
                    </Typography>
                </Grid>
                <Button
                    component={Link}
                    to='/login' 
                    type='button'
                    color='primary'
                    variant='contained'
                    style={btnstyle}
                    fullWidth
                >
                    Back to Sign In
                </Button>
            </Paper>
        </Grid>
    );
};

export default PasswordChangeSuccess;
