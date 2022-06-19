import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect, useMemo } from 'react'
import { SensorTypes, accelerometer, setUpdateIntervalForType } from "react-native-sensors";

const MainData = ({ token }) => {
    const [data, setData] = useState({ token, x: 0, y: 0, z: 0, timestamp: 0 })
    const [socketOpened, setSockedOpened] = useState(false)
  
    const client = useMemo(() => {
      return new WebSocket('ws://164.92.243.115:8000/ws/insert')
    }, [])
  
    const sendData = (publishData) => {
      client.send(JSON.stringify(publishData))
    }
  
    useEffect(() => {
      if (!socketOpened || !data) return
  
      console.log('Sending data', data)
  
      sendData(data)
    }, [socketOpened, data])
  
    useEffect(() => {
      client.addEventListener('open', () => {
        setSockedOpened(true)
      })
  
      client.onerror = console.log
    }, [client])
  
    useEffect(() => {
      setUpdateIntervalForType(SensorTypes.accelerometer, 200);
      const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>
        setData({ token, x, y, z, timestamp })
      );
    }, [])

  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default MainData

const styles = StyleSheet.create({})