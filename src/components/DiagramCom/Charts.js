import React from 'react'
import DoughnutChart from './DoughnutChart'
import GeographicalChart from './GeographicalChart'
import LinerChart from './LinerChart'
import './charts.css'
function Charts() {
  return (
    <div className='chartLayout'>
      <LinerChart />
      <DoughnutChart />
      <GeographicalChart />
    </div>
  )
}

export default Charts