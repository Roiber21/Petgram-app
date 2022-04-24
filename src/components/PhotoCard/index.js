/* eslint-disable import/no-absolute-path */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { ImageWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useToggleMutation } from '../../hooks/useToggleLikeMutation'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, Liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const { mutation } = useToggleMutation()

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    })
  }
  return (
    <Article ref={element}>

      {
        show && (<>
          <Link Link to={`/detail/${id}`}>
            <ImageWrapper>
              <Img src={src} />
            </ImageWrapper>

          </Link>
          <FavButton Liked={Liked} likes={likes} onClick={handleFavClick} />

        </>

        )
}

    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
