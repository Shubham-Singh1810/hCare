import React from 'react'
import { LineChart, Line, XAxis,  ResponsiveContainer } from 'recharts';
function PaitentThisMonth() {
    const data = [
        {
          name: 'Page A',
          day : 15,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          day : 16,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          day : 17,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          day : 18,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          day : 19,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          day : 20,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          day : 21,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
   

    <>
    <div className='PaitentThisMonth'>
    <div className="headingPatient">
    <h1>3,284</h1>
    <p>patient this Month</p>
    </div>
    
    <div style={{width:"100%"}}>
        <ResponsiveContainer aspect={2} >
        <LineChart data={data}>
        <XAxis dataKey="day"/>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
</>   
  )
}

export default PaitentThisMonth