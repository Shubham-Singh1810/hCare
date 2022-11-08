import React from 'react'
import { ResponsiveContainer,AreaChart,Area,CartesianGrid, LineChart, Line , XAxis, YAxis} from "recharts"
function LineChartTime() {
    const patientAdmited = [
        {time : 7, patient: 30},
        {time : 8, patient: 70},
        {time : 9, patient: 65},
        {time : 10, patient: 50},
        {time : 11, patient: 80},
        {time : 12, patient: 40},
    ]
  return (
     <div className="LineChartTime">
     <div style={{display:"flex",  justifyContent:"space-between" , padding:"1rem"}}>
        <h2>TimeAdmited</h2> 
        <h2>Today _</h2>
     </div>
    <hr/><br />
         <ResponsiveContainer  aspect={4}
         >
                <AreaChart data={patientAdmited}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" interval={"preserveStartEnd"}/>
                <YAxis dataKey="patient" interval={"preserveStartEnd"}/>
                    <Area dataKey="patient" fill="orangered" type="monotone" stroke='red'/>
                </AreaChart>
         </ResponsiveContainer>
     </div>
  )
}

export default LineChartTime