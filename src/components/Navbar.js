import React from 'react'

function Navbar() {
  return (
    <nav>
        <div className="searchBar">
            <input type="search" placeholder='Search'/>
        </div>
        
            <div className="avtar">
                <div className="userName">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                  <p>Emma Kwan _</p>  
                </div>
            
        </div>
    </nav>
  )
}

export default Navbar