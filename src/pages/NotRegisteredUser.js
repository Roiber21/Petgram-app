import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { Div, Img, Span } from '../components/UserForm/styles'
import { Helmet } from 'react-helmet'
import { useLoginMutation } from '../hooks/useLoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <Helmet>
        <title>Iniciar sesión | Petgram 🐶</title>
        <meta name='description' content='aqui puedes registrarte o iniciar sesion' />
      </Helmet>
      <Div>
        <Img src='https://cdn-icons-png.flaticon.com/512/4216/4216317.png' />
      </Div>
      <Span> registrate o inicia sesión en Petgram y descubre  <br />el increible mundo de las mascotas </Span>
      <Registro activateAuth={activateAuth} />
      <Login activateAuth={activateAuth} />
    </>
  )
}

const Registro = ({ activateAuth }) => {
  const { register, loading, error } = useRegisterMutation()
  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    register({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }
  const errorMsg = error && 'El usuario ya existe o hay algún problema.'
  return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrate' />
}
const Login = ({ activateAuth }) => {
  const { register, loading, error } = useLoginMutation()
  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    register({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }
  const errorMsg = error && 'El usuario no existe o la contraseña es incorrecta.'
  return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Iniciar sesión' />
}
