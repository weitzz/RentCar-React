import React from 'react'
import { useFormik } from 'formik';
import {LinkRouter,IconArrowLeft} from '../Login/style'
import { BtnLogin } from '../../components/Button'
import {LinkPassword,TitleForm} from '../Login/style'
import {WrapperInputs,LinksContainer,Container} from './style'
import {TitleSection} from '../../components/Text'


const validate = values => {
    const errors = {};
    if (!values.userName) {
      errors.userName = 'Required';
    } else if (values.userName.length > 15) {
      errors.userName = 'Must be 15 characters or less';
    }
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



const Register = () => {
    const formik = useFormik({
        initialValues:{
            userEmail: '',
            userPassword: '',
            userName: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
    })



    return (
        <>
          <LinkRouter to='/'><IconArrowLeft/></LinkRouter>
        <Container>
            <TitleForm>
                <TitleSection>Criar conta</TitleSection>
            </TitleForm>
            <WrapperInputs onSubmit={formik.handleSubmit}>
            <span>{formik.errors.userName ? <span>{formik.errors.userName}</span> : null}</span>
                <input type="text"
                 placeholder='Nome'
                 name='userName'
                 onChange={formik.handleChange}
                 value={formik.values.userName}

                 />
                <span>{formik.errors.userEmail ? <span>{formik.errors.userEmail}</span> : null}</span>
                <input type="text"
                 placeholder='Email'
                  name='userEmail'
                  onChange={formik.handleChange}
                  value={formik.values.userEmail}
                  />
                <span>{formik.errors.userPassword ? <span>{formik.errors.userPassword}</span> : null}</span>
                <input type="text"
                placeholder='Senha'
                 name='userPassword'
                 onChange={formik.handleChange}
                  value={formik.values.userPassword}
                 />
                <BtnLogin>Salvar</BtnLogin>
            </WrapperInputs>
            <LinksContainer>
           <LinkPassword to='/resetpassword'>Esqueceu sua senha ?</LinkPassword> 
           <LinkPassword to='/login'>Tenho cadastro.</LinkPassword> 
            </LinksContainer>
        </Container>
        </>
        
    )
}

export default Register
