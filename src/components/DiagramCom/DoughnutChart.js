import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import './charts.css'

function DoughnutChart() {

  //Data comes from backend in this case I have just done hard code here

  const fakedata = [
    {
      label: 'Total Clicks',
      data: 65
    },
    {
      label: 'Total Views',
      data: 200
    },
    {
      label: 'Signups',
      data: 22
    }
  ]

  const chartData = {
    labels: fakedata.map((data) => data.label),
    datasets: [
      {
        data: fakedata.map((data) => data.data),
        backgroundColor: ['#fbcf71', '#1f7bb6', '#1abc9c'],
        borderWidth: 0,
        
      }
    ],
  }

  // const centerText = {
  //   id: 'centerText',
  //   afterDatasetsDraw(chart,args, pliginOptions) {
  //     const {ctx} = chart;
  //     ctx.textAlign = 'center'
  //     // ctx.text.Baseline = 'middle'
  //     ctx.font = 'bold 26px'
  //     const text = "50"
  //     const textWidth = ctx.measureText(text).textWidth
  //     const x = chart.getDatasetsMeta(0).data[0].x
  //     const y = chart.getDatasetsMeta(0).data[0].y
  //     ctx.fillText(text, x, y)
  //   }
  // }

  return (
    <div className='doughnut'>
      <h3>Active Medias</h3>
      <div className='chart'>
        <Doughnut
          data={chartData}
          options={{
            cutout: 50,
            plugins: {
              legend: {
                position: 'none'
              }
            }
          }}
        />
      </div>

      <table>
        <thead>
          <tr>
            <td>CTR</td>
            <td>25%</td>
          </tr>
        </thead>
        <tbody>
          {
            fakedata.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.label}</td>
                  <td>{data.data}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default DoughnutChart