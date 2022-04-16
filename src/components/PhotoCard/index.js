/* eslint-disable import/no-absolute-path */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { ImageWrapper, Img, Article, Img2, Img3, Img4, Img5, Img6 } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useToggleMutation } from '../../hooks/useToggleLikeMutation'
import { Link } from '@reach/router'

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

      <Img5 src={require('../../images/opciones.png')} />
      <Img6 src={require('../../images/user.png')} />

      {
        show && (<>
          <Link Link to={`/detail/${id}`}>
            <ImageWrapper>
              <Img src={src} />
            </ImageWrapper>

          </Link>
          <FavButton Liked={Liked} likes={likes} onClick={handleFavClick} />
          <Img2 src={require('../../images/charla.png')} />
          <Img3 src={require('../../images/dm.png')} />
          <Img4 src={require('../../images/save.png')} />

        </>

        )
}

    </Article>
  )
}
