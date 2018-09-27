// src/Callback/Callback.js
import React from 'react';
import { withRouter } from 'react-router';

function Callback(props) {
  props.auth.handleAuthentication().then(() => {
    props.history.push('/');
  });

  return (
    <div>
      Loading user profile.
    </div>
  );
}

export default withRouter(Callback);

// This function is responisble for triggering the handleAuthentication process and when it ends, it routes the user to the '/' root page.