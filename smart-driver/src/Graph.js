import React from 'react'
import {
    BarChart,
    Bar,
    Line,
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from 'recharts';

const Graph = ({ data }) => {
    console.log(data )
  return (
    <div>
      <LineChart width={500} height={300} data={data}>
    <XAxis dataKey="x"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="y" stroke="#8884d8" />
    <Line type="monotone" dataKey="z" stroke="#82ca9d" />
  </LineChart>
    </div>
  )
}


export default Graph;
