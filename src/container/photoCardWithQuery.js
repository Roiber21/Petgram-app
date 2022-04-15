import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { PhotoCard } from '../components/PhotoCard'
import { Loader } from '../styles/loader'
const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => {
  console.log(id)
  const { loading, error, data } = useQuery(query, {
    variables: {
      id: id
    }
  })
  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return <Loader />
  }

  return (
    <PhotoCard {...data.photo} />
  )
}
