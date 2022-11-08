import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
function PieChartPatient() {
    const data = [
        { name: 'Inpatient', value: 72 },
        { name: 'Outpatient', value: 28 },
      ];
      const COLORS = ['#0088FE', '#00C49F'];
      return (
        <div className="PieChartPatient"><br />
        <h1 style={{color:"gray"}}>Sort By Months</h1><br /><hr /><br />
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
        <h2 style={{color:'#0088FE'}}>Impetient</h2>
        <h2 style={{color:'#00C49F'}}>Outpatient</h2>
      </div>
    </div>
  )
}

export default PieChartPatient