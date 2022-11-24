import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { useAppSelector } from '../../app/hooks'
import { selectFilteredData } from '../../store/slices/cardsSlice'
import { filterData } from '../../store/slices/cardsSlice'
import './Navbar.scss'

function Navbar() {
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectFilteredData)

  function handleFilter(searchedCategory: string) {
    dispatch(filterData(searchedCategory))
    console.log(data, "data")
  }
  return (
    <div className="navbarContainer">
      <h4 className="heading">Courses</h4>
      <ul className="categories">
        <li className="navItem popular" onClick={() => handleFilter('popular')}>
          Popular
        </li>
        <li
          className="navItem favorite"
          onClick={() => handleFilter('favorite')}
        >
          Favorite
        </li>
        <li className="navItem new" onClick={() => handleFilter('new')}>
          New
        </li>
      </ul>
    </div>
  )
}

export default Navbar
