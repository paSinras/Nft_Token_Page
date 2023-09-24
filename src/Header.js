 import React from 'react'
import './Header.css'
import punk from './assets/header/punk.png'
import search from './assets/header/search.png'
import themeswitch from './assets/header/themeswitch.png'


function Header() {
  return (
    <div className='header'>
    <div className='LogoContainer'>
        <div className='searchIcon'>
            <img src={punk} className='punk' alt='' />
        </div>
    </div>

    <div className='searchBar'>
       <div className='searchIconContainer'> 
       <img src={search} />
       </div>
       

    <input className='searchInput' placeholder='Collection,item or user.....'/>
    
    </div>

  
  
<div className='headerItems'>
     <p>Drops</p>       
     <p> MarketPlace</p>       
     <p>Create</p>       
</div>

<div className='headerActions'>
  <div className='themeSwitchContainer'>
    <img src={themeswitch} alt='' />
  </div>
  <div className='loginButton'>GET IN</div>

</div>

 </div>
  )
}

export default Header
