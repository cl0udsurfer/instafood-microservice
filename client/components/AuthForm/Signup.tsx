import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

import useNotification from 'hooks/useNotification';
import useRequest from 'hooks/useRequest';
import { AuthContext } from 'context/auth/auth.context';
import { Button } from 'components';
import {
  Wrapper,
  Container,
  Heading,
  SubHeading,
  HelperText,
  Offer,
  Input,
  Divider,
  LinkButton,
} from './AuthForm.style';

const SignupForm = () => {
  const { authDispatch } = useContext<any>(AuthContext);
  const { notify } = useNotification();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const { email, password } = values;
  const { doRequest, errors, loading } = useRequest({
    url: '/api/auth/signup',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: (response) => notify(response),
  });

  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN',
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
    <>
      <Wrapper>
        <Container>
          <Heading>
            <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
          </Heading>

          <SubHeading>
            <FormattedMessage
              id='signUpText'
              defaultMessage='Every fill is required in sign up'
            />
          </SubHeading>

          <FormattedMessage
            id='emailAddressPlaceholder'
            defaultMessage='Email Address or Contact No.'
          >
            {(placeholder) => (
              <Input
                type='text'
                placeholder={placeholder}
                onChange={handleChange('email')}
              />
            )}
          </FormattedMessage>

          <FormattedMessage
            id='passwordPlaceholder'
            defaultMessage='Password (min 6 characters)'
          >
            {(placeholder) => (
              <Input
                type='password'
                placeholder={placeholder}
                onChange={handleChange('password')}
              />
            )}
          </FormattedMessage>

          <HelperText style={{ padding: '20px 0 30px' }}>
            <FormattedMessage
              id='signUpText'
              defaultMessage="By signing up, you agree to Pickbazar's"
            />{' '}
            <Link href='/'>
              <a>
                <FormattedMessage
                  id='termsConditionText'
                  defaultMessage='Terms &amp; Condtion'
                />
              </a>
            </Link>
          </HelperText>

          {errors}

          <Button
            title={'Continue'}
            intlButtonId='continueBtn'
            onClick={onSubmit}
            loading={loading}
          />

          <Divider>
            <span>
              <FormattedMessage id='orText' defaultMessage='or' />
            </span>
          </Divider>

          <Button
            title={'Continue with Google'}
            intlButtonId='continueGoogleBtn'
          />
          <Offer style={{ padding: '20px 0' }}>
            <FormattedMessage
              id='alreadyHaveAccount'
              defaultMessage='Already have an account?'
            />{' '}
            <LinkButton onClick={toggleSignInForm}>
              <FormattedMessage id='loginBtnText' defaultMessage='Login' />
            </LinkButton>
          </Offer>
        </Container>
      </Wrapper>
    </>
  );
};

export default SignupForm;
