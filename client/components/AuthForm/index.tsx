import React, { useContext } from 'react';
import SignInForm from './Signin';
import SignUpForm from './Signup';
import { AuthContext } from 'context/auth/auth.context';

const AuthForm = () => {
  const { authState } = useContext<any>(AuthContext);
  let RenderForm;

  if (authState.currentForm === 'signIn') {
    RenderForm = SignInForm;
  }

  if (authState.currentForm === 'signUp') {
    RenderForm = SignUpForm;
  }

  return <RenderForm />;
};

export { AuthForm };
