import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
function GenderCard() {
    const data = [
        { name: 'Male', value: 82 },
        { name: 'Female', value: 18 },
      ];
      const COLORS = ["orangered", 'purple'];
  return (
    <div className="GenderCar"><br />
    <h1>Patients by gender</h1><br /><hr /><br />
    <div className='pieChart'>
    <PieChart width={120} height={120}>
    <Pie
      data={data}
      innerRadius={50}
      outerRadius={60}
      fill="#8884d8"
      paddingAngle={5}
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
  </div>
  <div style={{display:'flex',padding:"1rem", justifyContent:"space-between"}}>
        <h2 style={{color:'orangered'}}>Male</h2>
        <h2 style={{color:'purple'}}>Female</h2>
      </div>
  </div>
  )
}

export default GenderCard