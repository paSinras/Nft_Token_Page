import logo from './logo.svg';
import './App.css';
import Header from './Header'
import CollectionCard from './CollectionCard';
import PunkList from './PunkList';
import importFile from './importFile';
import Main from './Main';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
const [punkListData,setPunkListData]= useState([])
const [selectedPunk,setSelectedPunk]= useState(0);

  return (
    <div className="app">
         <Header />
    {
      punkListData.lenght>0 &&(
        <>
       
         </>
      )
    }
    
     <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
    
    <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
   

   
  

    </div>
  );
}

export default App;
