import React, { useState,useEffect } from 'react'
import one from './punks/one.jpg'
import instagram from './assets/owner/instagram.png'
import twitter from './assets/owner/twitter.png'
import more from './assets/owner/more.png'
import './Main.css'
import importFile from './importFile'


function Main({selectedPunk,punkListData,choose}) {

  const [activePunk,setActivePunk] = useState(punkListData[0])
 useEffect(()=>{
       setActivePunk(punkListData[selectedPunk])
 },[punkListData,selectedPunk]  )


    return ( 
    <div className='main'>
      <div className='mainContent'>
        <div className='punkHighlight'>
            <div className='punkContainer'>
                <img 
                className='selectedPunk'
                src={one} alt="" />
            </div>
        </div>
        <div className='punkDetails' style={{color:'white'}}>
           <div className='title'>
            {'Bandana Punk'}
        
           <span className='itemNumber'>·#3</span>
        </div>
        <div className='owner'>
            <div className='ownerImageContainer'>
                <img src="https://ipfs-2.thirdwebcdn.com/ipfs/QmT5mX2D9svmu6WyaUEusx5PJDEsvoBUj5VSa2keLg612s/5.jpg" alt="" />
            </div>
            <div className='ownerDetails'>
                <div className='ownerNameAndHandle'>
                    <div>0xa663f5c775B2a699471D9AE0bbb5795cfBFBcc5c</div>
                    <div className='ownerHandle'>@CP Punks</div>
                </div>


             <div className='ownerLink'>
                <img src={instagram} alt=''/>
             </div>
             <div className='ownerLink'>
             <img src={twitter} alt=''/>
             </div>
             <div className='ownerLink'>
             <img src={more} alt=''/>
             </div>


            </div>
        </div>
      </div>
    </div>
    </div>
  )
}


export default Main 