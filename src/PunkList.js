import React from 'react'
import './PunkList.css'
import CollectionCard from './CollectionCard'
import importFile from './importFile'

function PunkList({punkListData,setSelectedPunk}) {
  return (
    <div className='punkList'>
      {importFile.map(punkk =>
    
        <div onClick={()=> setSelectedPunk(punkk.id)}>

  <CollectionCard 
  key={punkk.id}
  id={punkk.id}
  name= {punkk.name}
  traits= {punkk.traits}
  image= {punkk.image_orginal_url}
  />

        </div> 
        )}
    
    </div>
  )
}

export default PunkList
