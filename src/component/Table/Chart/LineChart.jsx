import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box, Grid, Paper } from '@mui/material';
import {Chart, Filler} from 'chart.js';
import {month} from '../../../Data/dataChart';
import {useContext} from 'react';
import {CoinContext} from '../../../Context/CoinProvider'



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Chart.register(Filler);

export const options = {
  responsive: true,
  plugins: {
    legend:false,
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
  elements: {
    line: {
        tension: 0.3
    },
    point: {
      radius: 0
  }
},  
//  scales: {
//     x: {
//       grid: {
//         display: false      
//       }
//     },
//     y: {
//       grid: {
//         display: false      
//       }
//     }
//   },
  scales: {
    // to remove the labels
    x: {
      ticks: {
        display: false,
      },

      // to remove the x-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    }, 
  }
};





const LineChart = ({coin}) => {
  const { coins, setCoins } = useContext(CoinContext);

  const labels =month.map(item=>item.id)
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: coin.sparkline ,
        //data:moneyArr.map(item=>item.price),
      //   borderColor: 'rgb(255, 99, 132)',
         borderColor: 'rgb(66, 133, 242)',
        background: ' linear-gradient(to right, #4ca1af, #c4e0e5)',
        fill: true,
      },
      // {
      //   label: 'Dataset 2',
      //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      //   borderColor: 'rgb(53, 162, 235)',
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };

    return ( 
           <Grid width={'100%'} height={'100%'} maxHeight={50}>
                                  <Line options={options} data={data} />
           </Grid>

    
          );
}
 
export default LineChart;
// {
//   id:1,
//   total:20,
//   income:40,
//   expense:20,
//   month:"farvardin",
//   incomes:[{id:1,title:'work',price:10,month:'farvardin'},{id:2,title:'work',price:10,month:'farvardin'},],
//   expenses:[{id:1,title:'buy milk',price:10,month:'farvardin'}]
//   },
//   {
//   id:2,
//   total:20,
//   income:40,
//   expense:20,
//   month:"farvardin",
//   incomes:[{id:1,title:'work',price:10,month:'farvardin'}],
//   expenses:[{id:1,title:'buy milk',price:10,month:'farvardin'}]
//   },
