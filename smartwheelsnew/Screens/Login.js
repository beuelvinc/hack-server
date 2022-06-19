import { StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const { width, height } = Dimensions.get('window');

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, showError] = useState(false);
  const [token, setToken] = useState('')

    const handleSubmit = async () => {
        if (!email.trim()) {
            alert('Please Enter Email');
            return;
          }
          //Check for the Email TextInput
          if (!password.trim()) {
            alert('Please Enter Password');
            return;
          }
      
            const response = await axios.post('http://164.92.243.115:8000/api/auth/token/', { email, password })
            navigation.navigate('Home', {token: response.data.access })
        setPassword('')
        setEmail('')
    }

  return (
    <View style={styles.container}>
    <Text style={{ color: '#000', marginBottom: 50, fontSize: 15 }}>Save money and lives with <Text style={{ fontWeight:'bold', color: '#ADD8E6', fontSize: 17, textTransform: 'uppercase' }}>smart driver</Text></Text>
    <Text style={styles.text}>Email</Text>
      <TextInput
      style={styles.input}
      onChangeText={val => setEmail(val)}
      value={email}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput 
      style={styles.input}
      onChangeText={val => setPassword(val)}
      value={password}
      secureTextEntry={true}
      />
      <View style={{ justifyContent:'center', alignItems:'center' }}>
      <TouchableOpacity 
      style={styles.pressable}
      onPress={handleSubmit}
      >
        <Text>Log in</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
      },
    input: {
        padding: 5,
        width: width / 1.2,
        marginBottom: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#d3d3d3',
        color: '#000'
    },
    text: {
        color: '#000',
        marginBottom: 5
    },
    pressable: {
        backgroundColor: '#ADD8E6',
        width: 200,
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginTop: 50
    }
})