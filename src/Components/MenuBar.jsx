import React, { useState } from 'react'
import './MenuBar.css'

function MenuBar(props) {
    const[menu, setMenu] = useState(props.showMenu);
    console.log(props.showMenu + "helllo")

    function menubarClickHandler(){
        menu==='hide'?setMenu("show"):setMenu("hide");
    }
    
    props.onReturnMenuBar(menu);

  return (
    <div className={`menubar-container ${menu}`} onClick={menubarClickHandler} >
        <div className='menubar-item-container'>
        <div className={`bar-1 ${menu}`}></div>
        <div className={`bar-2 ${menu}`}></div>
        <div className={`bar-3 ${menu}`}></div>
        </div>
    </div>
  )
}

export default MenuBar
