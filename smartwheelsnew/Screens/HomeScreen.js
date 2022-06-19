import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainData from '../Components/MainData'

const HomeScreen = ({ route }) => {
  const { token } = route.params
  console.log(route.params)

  return (
    <View style={{ justifyContent:'center', alignItems: 'center', flex: 1 }}>
      <Text style={{ color: '#000' }}>Check your web interface</Text>
      <MainData token={token} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})