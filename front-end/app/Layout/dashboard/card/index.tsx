import React from 'react'
import './style.css'
export interface Type {
  title: string
  number: string
  icon: React.ReactNode
}

const Card: React.FC<Type> = ({ title, number, icon }) => {
  return (
    <div className='card'>
      <div className='card__info'>
        <div className='title__D'>{title}</div>
        <div className='number'>{number}</div>
      </div>
      <div className='icon'>
        <div className='icon_dev'>{icon}</div>
      </div>
    </div>
  )
}

export default Card
