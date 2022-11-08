import React from 'react'
import Card from './Card'

function InfoList() {
    const InfoData = 
    [
        {number : "3,256", placeholder : "Total Patients" , image :"https://thumbs.dreamstime.com/b/doctor-waiting-room-patients-wait-doctors-medical-help-seat-chairs-hospital-patient-man-woman-busy-health-clinic-120236287.jpg"},
        {number : "394", placeholder :"Available Staff" ,image :"https://tse2.mm.bing.net/th?id=OIP.yxf8t_SxCfJv_YGhcn6_GQHaHa&pid=Api&P=0"},
        {number : "$2,536", placeholder :"Avg Treat Costs", image :"https://tse3.mm.bing.net/th?id=OIP.gKexpSV-NrFMg0rgIjdYIwHaHa&pid=Api&P=0"},
        {number : "38", placeholder:"Available Cars",image :"https://tse4.mm.bing.net/th?id=OIP.e0zLffUPclrD9b8HfISaKAHaHa&pid=Api&P=0"}
    ]
  return (
    <div className="InfoList">
           {InfoData.map((value, index)=>{
            return (
                <Card key={index} data={value}/>
            )
           })}
    </div>
  )
}

export default InfoList