import "./App.css"
import Home from './Components/Home'
import Menu from "./Components/Menu";
import MenuBar from "./Components/MenuBar"
import React, { useState } from 'react'


function App(){
  const [showMenu, setShowMenu] = useState('');
  function returnMenuBar(menuState){
    setShowMenu(menuState)
  }
  return(
    <div>
      <MenuBar onReturnMenuBar={returnMenuBar} showMenu={showMenu}/>
      {showMenu==="show"?<Menu showMenu={showMenu} />:<Home/>}      
    </div>
  )
}

export default  App;

