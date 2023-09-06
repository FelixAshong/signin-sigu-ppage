// App.js

import React from 'react';
import SignInOutContainer from './containers';
import ForgotPassword from './components/ForgotPassword';
import VerifyOTP from './components/VerifyOTP'; 
import ChangePassword from './components/ChangePassword';
import PasswordChangeSuccess from './components/PasswordChangeSuccess';
import MultiSlidePage from './components/MultiSlidePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/src/components/ForgotPassword.js" component={ForgotPassword} />
          <Route path="/verify-otp" component={VerifyOTP} />
          <Route path="/src/components/ChangePassword.js" component={ChangePassword} />
          <Route path="/password-change-success" component={PasswordChangeSuccess} />
          <Route path="/multi-slide-page" component={MultiSlidePage} />
          <Route path="/" component={SignInOutContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
