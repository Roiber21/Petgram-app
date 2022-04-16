import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Helmet } from 'react-helmet'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <Helmet>
        <title> usuario|Petgram 🐶 </title>
        <meta name='description' content='cerrar sesion' />
      </Helmet>
      <h1>user</h1>
      <SubmitButton onClick={removeAuth}> cerrar sesion</SubmitButton>
    </>
  )
}
