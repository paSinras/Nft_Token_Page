import React from 'react'
import './CollectionCard.css'
import weth from './assets/weth.png'
import importFile from './importFile'
import one from './punks/one.jpg'

function CollectionCard(props) {
  return (
    <div className='collectionCard'>
      
      <img src={props.image} alt='' />
      <div className='details' >
      <div className='name'>
        {props.name}
        <div className='id'>·#{props.id}</div>
        </div>
        
      <div className='priceContainer'>
        <img src={weth} className='wethImage' alt='' />
        <div className='price'>{props.traits}</div>
    </div>
    </div>
    </div>
  )
}

export default CollectionCard
