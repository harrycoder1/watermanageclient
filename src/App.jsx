import logo from './logo.svg';
import './App.css';
import LineChart from './components/LineChart';
import Graph1 from './components/Graph1';
import { useState } from 'react';
import Graph2 from './components/Graph2';
import Graph3 from './components/Graph3';

function App() {
  const [data , setData] = useState([])
  return (
    <div className="mx-[16px] md:mx-[32px] lg:mx-[64px] xl:mx-[128px] mb-[8px]">
      {/* for heading */}
      <div className='text-green-400  drop-shadow-lg font-bold text-center text-[44px]'> OverView Of Use  Water  </div>
{/* for container */}
<div>
<div className="text-gray-600 text-sm text-center mt-[32px] mb-[8px]"> Today - Analyzing Daily Water Usage</div>
  <div className='flex justify-center items-center'><Graph3 data={data}/></div>
  <div className='flex flex-wrap justify-center items-center mt-[32px] mb-[8px]'>
  <div >
    <div className="text-gray-600 text-sm text-center">A Monthly Saga of Water Utilizatio</div>
    <Graph1 data={data}/></div>
  <div>
    <div className="text-gray-600 text-sm text-center mt-[32px] mb-[8px]">A Yearly Deep Dive into Water Consumption Patterns</div>
    <Graph2 data={data}/></div>

  </div>


</div>

    </div>
  );
}

export default App;
