import React, { useContext, useState } from 'react';
import Router from 'next/router';
import { FormattedMessage } from 'react-intl';

import { AuthContext } from 'context/auth/auth.context';
import useRequest from 'hooks/useRequest';
import { Google, Button } from 'components';
import {
  LinkButton,
  Wrapper,
  Container,
  Heading,
  SubHeading,
  OfferSection,
  Offer,
  Input,
  Divider,
} from './AuthForm.style';

const SigninForm = () => {
  const { authDispatch } = useContext<any>(AuthContext);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const { email, password } = values;

  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push('/'),
  });

  const toggleSignUpForm = () => {
    authDispatch({
      type: 'SIGNUP',
    });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await doRequest();
  };

  return (
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage id='welcomeBack' defaultMessage='Welcome Back' />
        </Heading>
        <SubHeading>
          <FormattedMessage
            id='loginText'
            defaultMessage='Login with your email &amp; password'
          />
        </SubHeading>
        <form onSubmit={onSubmit}>
          <FormattedMessage
            id='emailAddressPlaceholder'
            defaultMessage='Email Address.'
          >
            {(placeholder) => (
              <Input
                type='email'
                onChange={handleChange('email')}
                placeholder={placeholder}
                required
              />
            )}
          </FormattedMessage>

          <FormattedMessage
            id='passwordPlaceholder'
            defaultMessage='Password (min 6 characters)'
            values={{ minCharacter: 6 }}
          >
            {(placeholder) => (
              <Input
                type='password'
                placeholder={placeholder}
                onChange={handleChange('password')}
                required
              />
            )}
          </FormattedMessage>

          {errors}
          <Button title={'Continue'} intlButtonId='continueBtn' />
        </form>
        <Divider>
          <span>
            <FormattedMessage id='orText' defaultMessage='or' />
          </span>
        </Divider>

        <Button
          title={'Continue with Google'}
          icon={<Google />}
          iconPosition='left'
          iconStyle={{ color: '#ffffff', marginRight: 5 }}
          intlButtonId='continueGoogleBtn'
          style={{ color: '#fff' }}
        />

        <Offer style={{ padding: '20px 0' }}>
          <FormattedMessage
            id='dontHaveAccount'
            defaultMessage="Don't have any account?"
          />{' '}
          <LinkButton onClick={toggleSignUpForm}>
            <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
          </LinkButton>
        </Offer>
      </Container>

      <OfferSection>
        <Offer>
          <FormattedMessage
            id='forgotPasswordText'
            defaultMessage='Forgot your password?'
          />{' '}
          <LinkButton>
            <FormattedMessage id='resetText' defaultMessage='Reset It' />
          </LinkButton>
        </Offer>
      </OfferSection>
    </Wrapper>
  );
};

export default SigninForm;
