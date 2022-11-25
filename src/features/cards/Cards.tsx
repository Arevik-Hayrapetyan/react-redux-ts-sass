import { useEffect } from 'react'
import Card from '../card/Card'
import { useAppSelector } from '../../app/hooks'
import { useAppDispatch } from '../../app/hooks'
import { selectFilteredData } from '../../store/slices/cardsSlice'
import { filterData } from '../../store/slices/cardsSlice'
import './Cards.scss'

export function Cards() {
  const dispatch = useAppDispatch()
  const data = useAppSelector(selectFilteredData)

  useEffect(() => {
    dispatch(filterData('popular'))
  }, [])

  return (
    <div className="cardsContainer">
      {data.map((item) => (
        <Card {...item} key={item.id} />
      ))}
    </div>
  )
}
