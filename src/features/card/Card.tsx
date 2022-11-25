import React, { Fragment } from 'react'
import './Card.scss'

type Props = {
  id: number
  name: string
  category: string
  lessonsCount: number
  duration: number
}

const Card: React.FC<Props> = ({
  id,
  name,
  category,
  lessonsCount,
  duration,
}) => {
  return (
    <Fragment>
      <div className="cardContainer">
        <div className="infoContainer">
          <div>
            <h4>{name}</h4>
            <span>{lessonsCount} lessons</span>
          </div>
          <span>{duration} min</span>
        </div>
        <div className="square">
          <div className="triangleRight "></div>
        </div>
      </div>
    </Fragment>
  )
}

export default Card
