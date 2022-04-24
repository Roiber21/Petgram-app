import React from 'react'
import { useGetFavorites } from '../../hooks/useGetFavorites.js'
import { Loader } from '../../styles/loader.js'
import { Image, Grid, Link } from './styles.js'
import PropTypes from 'prop-types'

export function ListOfFavs () {
  const { loading, error, data } = useGetFavorites()
  if (loading) return <Loader />
  if (error) return <p>error...</p>
  const { favs } = data
  return (
    <Grid>
      {favs.map(fav => <Link key={fav.id} to={`/detail/${fav.id}`}><Image src={fav.src} /></Link>)}
    </Grid>
  )
}

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
