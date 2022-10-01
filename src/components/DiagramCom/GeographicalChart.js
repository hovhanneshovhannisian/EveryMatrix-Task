import React, { useState } from 'react'
import { Chart } from 'react-google-charts'
import './charts.css'

function GeographicalChart() {
  const [time, setTime] = useState('month')
  const [dataCategory, setDataCategory] = useState('signup')

  const changeDataTime = (newVal) => {
    setTime(newVal)
  }
  const changeDataCategory = (newVal) => {
    setDataCategory(newVal)
  }

  //For the request I made a 'time' state which includes current value of options 

  //Data comes from backend in this case I have just done hard code here
  const gotDataFromBackEnd = [ //length is more then 3
    {
      country: "United States",
      data: 200
    },
    {
      country: "China",
      data: 65
    },
    {
      country: "United Kingdom",
      data: 22
    },
    {
      country: "Russia",
      data: 17
    },
    {
      country: "Finland",
      data: 5
    }
  ]

  const data = gotDataFromBackEnd.slice(0, 3)

  const chartDataProc = data.map((data) => [data.country, data.data])
  const chartData = [
    ["Country", "Data"],
    ...chartDataProc
  ]
  return (
    <div className='geochart'>
      <div className='titleandselect'>
        <h3>Medias Staats</h3>
        <select value={time} onChange={(e) => changeDataTime(e.target.value)}>
          <option value='week'>Last Week</option>
          <option value='month'>Last Month</option>
          <option value='year'>Last Year</option>
        </select>
      </div>

      <div className='chart'>
        <Chart
          chartType="GeoChart"
          height="160px"
          data={chartData}
          options={{
            backgroundColor: "transparent",
            defaultColor: '#fbcf71',
            datalessRegionColor: "#878686",
          }}
        />
      </div>
      <div className='underMap'>
        <select value={dataCategory} onChange={(e) => changeDataCategory(e.target.value)}>
          <option value='signup'>Affiliate Sign Ups</option>
          <option value='#2'>#2</option>
          <option value='#3'>#3</option>
        </select>
      </div>
      <table>
        <tbody>
          {
            data.map((data, i) => <tr key={i}><td>{i + 1}</td><td>{data.country}</td> <td>{data.data}</td></tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default GeographicalChart