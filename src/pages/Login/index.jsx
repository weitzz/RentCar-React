import React from 'react'
import { useFormik } from 'formik';
import Button from '../../components/Button'
import { Container, WrapperInputs, TitleForm, IconArrowLeft, LinksContainer, LinkPassword, LinkRegister, LinkRouter, Email, Lock } from './style'
import { TitleSection } from '../../components/Text'


const validate = values => {
  const errors = {};
  if (!values.userPassword) {
    errors.userPassword = 'Required';
  } else if (values.userPassword.length > 20) {
    errors.userPassword = 'Must be 20 characters or less';
  }

  if (!values.userEmail) {
    errors.userEmail = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.userEmail)) {
    errors.userEmail = 'Email inválido!';
  }

  return errors;
};

const Login = () => {
  const formik = useFormik({
    initialValues: {
      userEmail: '',
      userPassword: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  return (
    <>
      <LinkRouter to='/'><IconArrowLeft /></LinkRouter>
      <Container>
        <TitleForm>
          <TitleSection>Login</TitleSection>
        </TitleForm>
        <WrapperInputs onSubmit={formik.handleSubmit}>
          <span>{formik.errors.userEmail ? <span>{formik.errors.userEmail}</span> : null}</span>
          <input type="text"
            placeholder='Email'
            name='userEmail'
            onChange={formik.handleChange}
            value={formik.values.userEmail}
          /><Email />

          <span>{formik.errors.userPassword ? <span>{formik.errors.userPassword}</span> : null}</span>
          <input type="text"
            placeholder='Senha'
            name='userPassword'
            onChange={formik.handleChange}
            value={formik.values.userPassword}

          /><Lock />
          <Button>Entrar</Button>
        </WrapperInputs>
        <LinksContainer>
          <LinkPassword to='/resetpassword'>Esqueceu sua senha ?</LinkPassword>
          <LinkRegister to='/register'>Não tenho cadastro.</LinkRegister>
        </LinksContainer>
      </Container>

    </>
  )
}


export default Login
