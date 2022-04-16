import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
import ReactLoading from 'react-loading'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-34mow14am-roiber21.vercel.app/categories')
      .then(res => res.json())
      .then(Response => {
        setCategories(Response)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowfixed = window.scrollY > 200
      showFixed !== newShowfixed &&
       setShowFixed(newShowfixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  })
  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? (<ReactLoading type='cylon' color='#0fd7ff' />)
          : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
          }
    </List>

  )
  return (
    <>

      {renderList()}
      {showFixed && renderList(true)}
    </>

  )
}
export const ListOfCategories = React.memo(ListOfCategoriesComponent)
