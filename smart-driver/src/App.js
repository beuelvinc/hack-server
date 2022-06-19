import React, { useEffect, useMemo, useState } from 'react'
import './styles.css'
// import io from "socket.io-client"
// import Graph from './Graph';
// import {
//   BarChart,
//   Bar,
//   Line,
//   LineChart,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid
// } from 'recharts';
import FusionCharts from 'react-fusioncharts';
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy"
import ReactFC from 'react-fusioncharts';
import Column2D from "fusioncharts/fusioncharts.charts";
import Header from './Header';
import Graph from './Graph';


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

import  {Store,useGlobalState} from 'state-pool'
import { type } from '@testing-library/user-event/dist/type';
// ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme)
// Store.setState("arr",[])
const App = () => {
  const [state, setState] = useState([])
  const [bonus, setBonus] = useState(0);
  const [Prob, setProb] = useState(0);
  const [Loyalty, setLoyalty] = useState(0);
  useEffect(() => {
    setInterval(() => {
      let number = Math.floor(50+Math.random()*10)
      setBonus(number)
    }, 1000)
  }, [])

  useEffect(() => {
    setInterval(() => {
      let number = Math.floor(5+Math.random()*20)
      setProb(number)
    }, 1000)
  }, [])

  useEffect(() => {
    setInterval(() => {
      let number = 1000+Math.floor(Math.random()*200)-100
      setLoyalty(number)
    }, 1000)
  }, [])
  
  useEffect(() => {
    const ws = new WebSocket('ws://164.92.243.115:8000/ws/insert');
    ws.onopen = (event) => {
    };
    ws.onmessage = function (event) {
      try {
        let coming_data = JSON.parse(event.data)
        setState([...state, JSON.parse(coming_data)])

      } catch (err) {
        console.log(err);
      }
    };
    //clean up function
    return () => ws.close();
  }, [state]);

  console.log(state)
  return (
    
    <div className='main' style={{ height: '100vh', padding: 20 }}>

      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', fontSize: 30 }}>        
            <p>Save money and lives with <b style={{ color: '#ADD8E6' }}>smart driver</b></p>
          </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: 500, backgroundColor: '#fff', height: 500, marginTop: 20, borderRadius: 20, padding: 20, boxShadow: '1px 2px 9px rgba(0,0,0, 0.5)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }}>
            <img style={{ height: 150, width: 150, borderRadius: 500 }} className='image' src='https://images-ext-1.discordapp.net/external/G2AV_2EYL5kfvISnednh1DM9VeG6CRZdnfB8ZGg5QYA/https/dynaimage.cdn.cnn.com/cnn/c_fill%2Cg_auto%2Cw_1200%2Ch_675%2Car_16%3A9/https%253A%252F%252Fcdn.cnn.com%252Fcnnnext%252Fdam%252Fassets%252F220603110418-elon-musk-economy.jpg?width=678&height=606' />
            <div>
              <h1 style={{ fontSize: 35 }}>Elon Musk</h1>
              <h3 style={{ fontSize: 20 }}>member since 2020</h3>
            </div>
          </div>
          <div style={{ display: 'flex', marginTop: 20, justifyContent: 'space-between', padding: 20 }}>
            <div style={{ width: '50%', borderRight: '1px solid #d3d3d3' }}>
            <h3>Loyalty Points</h3>
            <h3>Probability to crash</h3>
            <h3>Bonus</h3>
            </div>
            <div>
            <h3>{Loyalty}</h3>
            <h3>{Prob}%</h3>
            <h3>{bonus}</h3>
            </div>
          </div>
        </div>

      <LineChart width={500} height={300} data={state}>
    <XAxis dataKey="y"/>
    <YAxis />
    <Line  dataKey="x"  />
  </LineChart>
      </div>
    </div>
  )
}
 
export default App;