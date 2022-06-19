import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import WS from 'react-native-websocket';

const WebSocketClient = ({ data }) => {
  const client = new WebSocket('ws://10.2.114.10:8111/ws/insert')

  // console.log(data)
    const sendData = () => {
        client.send(JSON.stringify({
          title: 'hello'
        }))
    }

  console.log(data)

  client.onOpen = () => {
    client.send('it worked')
  }

  useEffect(() => {
    sendData()
  },[])

  return (
    <View>
      <WS 
        url='ws://10.2.114.10:8111/ws/insert'
      />
    </View>
  )
}

export default WebSocketClient

const styles = StyleSheet.create({})