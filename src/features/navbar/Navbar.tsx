import React, {useState} from 'react'
import './Navbar.scss'

function Navbar() {
  const [line, setLine] = useState("")

function handleChange(e:React.MouseEvent<HTMLElement>){
//   if(line)
//  e.currentTarget.classList.add("underline")
  // if(line)
  // setLine("underline")
}
  return (
    <div className="navbarContainer">
      <h4 className="heading">Courses</h4>
      <ul className="categories">
        <li id="popular" onClick={handleChange}>Popular</li>
        <li id="favorite" onClick={handleChange}>Favorite</li>
        <li id="new" onClick={handleChange}>New</li>
        
      </ul>
    </div>
  )
}

export default Navbar
