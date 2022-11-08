import React from 'react'
import BarchartOutpatient from './BarchartOutpatient'
import GenderCard from './GenderCard'
import LineChartTime from './LineChartTime'
import PieChartPatient from './PieChartPatient'
import ProgressChart from './ProgressChart'

function MidContainer() {
  return (
    <div className="MidContainer">
        <BarchartOutpatient/>
        <PieChartPatient/>
        <GenderCard/>
    </div>
  )
}

export default MidContainer