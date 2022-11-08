import React from 'react'
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function BarchartOutpatient() {
    const data = [
        {
          name: 'Oct 2019',
          outPatient: 2800,
          imPatient: 1000,
        },
        {
          name: 'Nov 2019',
          outPatient: 3000,
          imPatient: 1398,
          amt: 2210,
        },
        {
          name: 'Dec 2019',
          outPatient: 4000,
          imPatient: 500,
        },
        {
          name: 'Jan 2020',
          outPatient: 2780,
          imPatient: 608,
        },
        {
          name: 'Feb 2020',
          outPatient: 1890,
          imPatient: 700,
        },
        {
          name: 'Mar 2020',
          outPatient: 3390,
          imPatient: 400,
        },
        
      ]; 
  return (
    <div className="Barchart">
    <h1>Outpatient vs. Impatients Trend</h1><br />
    <ResponsiveContainer width="100%" aspect={3}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis  orientation="left" stroke="#8884d8" />
          <YAxis  orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Bar  dataKey="imPatient" fill="#82ca9d" />
          <Bar  dataKey="outPatient" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default BarchartOutpatient