import React from 'react'
import { Bar } from 'react-chartjs-2';

export default function Graph1({data}) {
    // x-> days at one month 
    // y ->volume of water
    const chartColors = [
        '#FF5733', '#33FF57', '#5733FF', '#FF33A6', '#33A6FF', 
        '#A6FF33', '#FF336B', '#336BFF', '#FFD133', '#D133FF', 
        '#33FFD1', '#FF3359', '#3359FF', '#FF9333', '#9333FF', 
        '#33FF93', '#FF3350', '#3350FF', '#FF7333', '#7333FF', 
        '#33FF73', '#FF33E1', '#33E1FF', '#E1FF33', '#FF334D', 
        '#334DFF', '#FFBD33', '#BD33FF', '#33FFBD', '#FF33CC'
        // Add more colors if needed
      ];
      const chartData = [
        0, 10, 5, 2, 20, 30, 45, 15, 8, 25,
        12, 18, 33, 28, 22, 40, 14, 7, 32,
        19, 24, 38, 11, 29, 16, 35, 9, 26,
        23, 36, 17, 31
        // Add more data points if needed
      ]
      const daysArray = Array.from({ length: 31 }, (_, index) => index + 1);
      
const data1 = {
    labels: daysArray,
    datasets: [
      {
        label:"water used" ,
        backgroundColor:chartColors,
        // borderColor: "rgb(255, 99, 132)",
        data:chartData,
      },
    ],
  };
  return (
    <div className='w-full lg:w-[500px] h-auto'>      <Bar data={data1} />
    </div>
  )
}
