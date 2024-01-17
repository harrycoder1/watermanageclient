import React from 'react'
import { Pie } from 'react-chartjs-2';

export default function Graph2({data}) {
    const monthsArray = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      const waterUsageArray = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 50);   
      const monthColors = [
  '#FF5733', // January
  '#33FF57', // February
  '#5733FF', // March
  '#FF33A6', // April
  '#33A6FF', // May
  '#A6FF33', // June
  '#FF336B', // July
  '#336BFF', // August
  '#FFD133', // September
  '#D133FF', // October
  '#33FFD1', // November
  '#FF3359'  // December
  // Add more colors if needed
];
      const data1 = {
        labels: monthsArray,
        datasets: [
          {
            label: "Water used",
            backgroundColor:monthColors ,
            // borderColor: "rgb(255, 99, 132)",
            data: waterUsageArray,
            
          },
        ],
      };   
  return (
    <div className='w-[400px] h-auto'>      <Pie data={data1} />
    </div>
  )
}
