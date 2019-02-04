import React from 'react';

import Authentication from '../modules/Authentication/Authentication';
import SignIn from '../modules/Authentication/SignIn';
import SignUp from '../modules/Authentication/SignUp';

const AuthenticationPage = () => (
  <div>
    <Authentication items={[<SignIn />, <SignUp />]} />
  </div>
);

export default AuthenticationPage;
