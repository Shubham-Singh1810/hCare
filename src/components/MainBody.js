import React from 'react'
import BottomContainer from './BottomContainer'
import InfoList from './InfoList'
import MidContainer from './MidContainer'
import Navbar from './Navbar'

function MainBody() {
  return (
    <div className="MainBody">
        <Navbar/>
        <InfoList/>
        <MidContainer/>
        <BottomContainer/>
    </div>
  )
}

export default MainBody