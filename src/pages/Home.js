import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Helmet } from 'react-helmet'

export const Home = ({ categoryId }) => {
  return (
    <>
      <Helmet>
        <title> Petgram 🐶| tu app de fotos de mascotas</title>
        <meta name='description' content='con Petgram puedes encontar fotos de animales domesticos muy bonitos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  )
}
