import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import './charts.css'
function LinerChart() {
  const [time, setTime] = useState('week')

  const changeDataTime = (newVal) => {
    setTime(newVal)
  }

  //For the request I made a 'time' state which includes current value of options 

  //Data comes from backend in this case I have just done hard code here
  //The data and  horizontal labels are depend on the selected state (week, month, year and so on) 
  //The vertical labels are depends on gotten data values

  const chartData = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        label: 'Clicks',
        data: [0, 20, 60, -20, -40, 10, -60],
        backgroundColor: '#fbcf71',
        borderColor: '#fbcf71',
        tension: 0.4
      },
      {
        label: 'Page View',
        data: [40, 60, -10, 0, 40, -10, 20],
        backgroundColor: '#1f7bb6',
        borderColor: '#1f7bb6',
        tension: 0.4

      },
      {
        label: 'Sign ups',
        data: [-30, -20, 10, 20, 60, -20, -40],
        backgroundColor: '#1abc9c',
        borderColor: '#1abc9c',
        tension: 0.4

      }
    ],

  }

  return (
    <div className='linerchart'>
      <div className='titleandselect'>
        <h3>Medias Staats</h3>
        <select value={time} onChange={(e) => changeDataTime(e.target.value)}>
          <option value='week'>Last Week</option>
          <option value='month'>Last Month</option>
          <option value='year'>Last Year</option>
        </select>
      </div>
      <div className='chart'>
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false
                },
                axis: {
                  display: false
                }
              },

            },
            plugins: {
              legend: {
                position: "bottom"
              }
            }
          }}
        />
      </div>
    </div>
  )
}

export default LinerChart