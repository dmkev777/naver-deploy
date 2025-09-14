import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { useEffect, useState } from 'react'
import React from 'react'
import { data } from 'react-router-dom'
import { color } from 'chart.js/helpers'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function Graph({tasks}) {
    const [chartData, setChartData] = useState(
        { labels: ["Undone", "Inprogress", "Done"],
          datasets: [{label: "Tasks", data: [0,0,0], backgroundColor: ["#b43f3fff", "#a4b534ff", "#4e8e32ff"]}]
        }
    )
    useEffect(()=> {
        const statusCount = {undone: 0, inprogress: 0, done: 0}
        tasks.forEach(task => {statusCount[task.status]++ });
        setChartData((prev) => ({...prev, datasets: [{...prev.datasets[0], 
        data: [statusCount["undone"], statusCount["inprogress"], statusCount["done"]]
        }]
        })) 
    }
    , [tasks])


  return (<Bar 
    data={chartData}
    options={{responsive: true, 
        maintainAspectRatio: false ,
        scales:{y:{ticks:{
            stepSize: 1}},
        x: {
      ticks: {
        callback: (val, index) => {
          const labels = ["❌ Undone", "⚡ Inprogress", "✅ Done"];
          return labels[index];
        },
        color: "#000000ff", // màu chữ
        font: {
          size: 16,
          family: "Inconsolata",
          weight: 600,
        }
      }
    }
        },
    plugins: {
        legend: {
            labels: {
                color: "#000000ff",
                font: {
                    size: 16,
                    family: "Inconsolata",
                    weight: 'bold',

                }


            }

        }
    }
    
    
    }}
    
    />
  )
}

export default Graph