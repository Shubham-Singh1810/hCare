import React from 'react'
import LineChartTime from './LineChartTime'
import PaitentThisMonth from './PaitentThisMonth'
import PatientByDivision from './PatientByDivision'

function BottomContainer() {
  return (
    <div className="BottomContainer">
        <LineChartTime/>
        <PatientByDivision/>
        <PaitentThisMonth/>
    </div>
  )
}

export default BottomContainer