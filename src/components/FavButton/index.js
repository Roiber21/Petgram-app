import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'
import propTypes from 'prop-types'

export const FavButton = ({ Liked, likes, onClick }) => {
  const Icon = Liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}

FavButton.propTypes = {
  Liked: propTypes.bool.isRequired,
  likes: propTypes.number.isRequired,
  onclick: propTypes.func.isRequired
}
