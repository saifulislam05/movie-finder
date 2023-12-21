import React from 'react'
import ColorCard from './ColorCard'
import ColorsData from '../Data/Colors.json'
const ColorList = () => {
  return (
      <div className='flex gap-8 justify-center flex-wrap mb-6'>
          {
              ColorsData.map((color, index) => {
                  return <ColorCard key={index} {...color} />   
              })
          }
       
      </div>
  )
}

export default ColorList