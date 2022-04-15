import { useQuery, gql } from '@apollo/client'
import React from 'react'
import { Loader } from '../styles/loader'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const RenderProp = ({ loading, data, error }) => {
  if (loading) return <Loader />
  if (error) return <p>Error...</p>
  const { favs } = data

  return favs.map(fav => <img key={fav.id} src={fav.src} />)
}

export const FavsWithQuery = () => {
  const { loading, error, data } = useQuery(GET_FAVS, {
    fetchPolicy: 'cache-and-network'
  })

  return <RenderProp loading={loading} data={data} error={error} />
}
