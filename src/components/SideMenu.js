import React from 'react'

function SideMenu() {
  return (
    <div className="sideMenu">
    <div className="brandName">
       <span>H</span>-care
    </div>
    <div className="navigationItem">
        <div className="registerBtn">
            Register patient +
        </div>
        <div className="navigation">
            <ul>
                <li>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdqMfrufc3_cW8vOLLc58aGkpiqcpnQoXaw_34HviM&s"/>
                    <p>Patient</p> 
                </li>
                <li>
                <img src="https://cdn-icons-png.flaticon.com/512/272/272471.png" alt="" />
                    <p>Overview</p> 
                </li>
                <li>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25613.png" alt="" />
                    <p>Map</p> 
                </li>
                <li>
                <img src="https://cdn-icons-png.flaticon.com/512/1642/1642054.png" alt="" />
                   <p>Departments</p>  
                </li>
                <li>
                <img src="https://www.pngitem.com/pimgs/m/42-422713_doctor-icon-doctor-image-png-transparent-png.png" alt="" />
                    <p>Doctors</p> 
                </li>
                <li>
                <img src="https://www.pngfind.com/pngs/m/589-5899778_history-icon-png-history-icon-transparent-png.png" alt="" />
                    <p>History</p> 
                </li>
            </ul>
        </div>
        <div className="settingBtn">
            <img src="https://cdn-icons-png.flaticon.com/512/3524/3524659.png" alt="" /> <p>Setting</p> 
        </div>
        <div className="getMobileCard">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYVKBcVZYMphxUYV7pckYMFPaguIjmBCGy5w&usqp=CAU" alt="" />
            <div className="mobileCardContent">
               <p>Get mobile app</p>
               <div className="mobileIcon">
               <img  src="https://tse4.mm.bing.net/th?id=OIP.gZjWRPDcv-ZbcSBqQF34UgHaHa&pid=Api&P=0"/>
               <img src="http://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png"/>
               </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SideMenu