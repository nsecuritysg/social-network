import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import { login } from '../../redux/usersReducer';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={'Login'} name={'login'} component={'input'} />
      </div>
      <div>
        <Field placeholder={'Password'} name={'password'} component={'input'} />
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type="checkbox" />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: 'login',
})(LoginForm);

export const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    // console.log('login', formData.login);
    // console.log('email', formData.email);
    // console.log('password', formData.password);
    // console.log('rememberMe', formData.rememberMe);
    // login(formData.login, formData.password, formData.rememberMe);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
