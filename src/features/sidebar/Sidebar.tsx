import React from 'react'
import './Sidebar.scss'
import { HiClipboardList } from 'react-icons/hi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { HiCube } from 'react-icons/hi'

function Sidebar() {
  return (
    <div className="sidebarContainer">
      <div className="svgContainer">
        <span className="svgItem">
          <HiCube />
        </span>
      </div>
      <div className="svgContainer">
        <span className="svgItem">
          <HiClipboardList />
        </span>
      </div>
      <div className="svgContainer">
        <span className="svgItem">
          <BsFillPeopleFill />
        </span>
      </div>
    </div>
  )
}

export default Sidebar
