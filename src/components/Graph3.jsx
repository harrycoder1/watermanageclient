import React from 'react'
import { Bar } from 'react-chartjs-2';

export default function Graph3({data}) {
    // x->time at one day
    // y -> amount of water utilize
    const hoursArray = Array.from({ length: 24 }, (_, index) => index);
// console.log(hoursArray);
function getRandomDateTime() {
    const now = new Date();
    const randomHours = Math.floor(Math.random() * 24);
    const randomMinutes = Math.floor(Math.random() * 60);
    const randomSeconds = Math.floor(Math.random() * 60);
  
    now.setHours(randomHours, randomMinutes, randomSeconds);
  
    return now.toISOString();
  }
  
  const randomDateTimesArray = Array.from({ length: 10 }, getRandomDateTime);
//   console.log(randomDateTimesArray);
  
// for water usuages
function getRandomWaterUsage() {
    return Math.floor(Math.random() * 100) + 50; // Random value between 50 and 149
  }
  
  const waterUsageArray = Array.from({ length: 10 }, getRandomWaterUsage);
  console.log(waterUsageArray);
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
//   start your code here :
const data1 = {
    labels: randomDateTimesArray,
    datasets: [
      {
        label:"time" ,
        backgroundColor:monthColors,
        // borderColor: "rgb(255, 99, 132)",
        data:waterUsageArray,
      },
    ],
  };

  return (
    <div className='w-full md:w-[800px] h-auto'>      <Bar data={data1} />
    </div>
  )
}
