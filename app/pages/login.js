import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Log In The App</Text>
      <TextInput
        style={styles.input}
        onChangeText={null}
        value={null}
        placeholder="email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={null}
        value={null}
        placeholder="pasword"
        keyboardType="default"
        secureTextEntry
      />
      <View style= {styles.buttoncontainer}>
        <Button
          style={styles.button}
          onPress={null}
          title="Log In"
          color="orangered"
          accessibilityLabel="Learn more about this purple button"
          />
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        height: 400,
        width: 400,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        elevation: 7,
        borderRadius: 10,
    },text:{
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold',
    },input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },button:{
        paddingTop: 12,
        width: 200,
        borderRadius: 10,
      },
      buttoncontainer:{
        paddingTop: 90,
        width: 200,
        borderRadius: 10,
      }

})