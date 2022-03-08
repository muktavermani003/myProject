import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Screen1 from './Screen1'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "username": "",
      "password": ""
    }
  }
  check = () => {
    if (!this.state.username) {
      alert('enter user name');
      return;
    } else if (!this.state.password) {
      alert('enter password');
      return;
    } 
  }
  callApi = async() => {
  
  const result = await fetch(
    'https://koushik-node-users.herokuapp.com/api/user/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'itskoushikpaul@gmail.com',
        password: '123456',
      }),
    },
  )
  const res = await result.json();
  console.log('res', res);
  console.log('response', res.status);
if(res.status==='success'){
this.props.navigation.navigate(Screen1)
}
else{
  alert('wrong email ID or password')
}
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: '#394e59',
            fontSize: 18,
            fontWeight: 'bold',
            marginRight: 144,
            marginTop: 58,
          }}>
          Login To Your Account
        </Text>
        <TextInput
          //value={this.state.username}
          placeholder="Enter userID"
          style={styles.txtinp1}
          onChangeText={(username) => this.setState({ username: username })}
        />
        <TextInput
          //value={this.state.password}
          placeholder={'Enter Password'}
          style={styles.txtinp2}
          onChangeText={(password) =>
            this.setState({ password: password })
          }></TextInput>
        <View>
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={() => this.callApi()}>
            <Text style={styles.logintext}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', alignItems: 'center' },
  txtinp1: {
    borderColor: 'black',
    borderWidth: 1,
    width: 329,
    marginLeft: 16,
    marginRight: 15,
    padding: 10,
    marginTop: 37,
    paddingLeft: 30,
    borderRadius: 25,
  },
  txtinp2: {
    borderColor: 'black',
    borderWidth: 1,
    width: 329,
    marginLeft: 16,
    marginRight: 15,
    padding: 10,
    marginTop: 24,
    paddingLeft: 30,
    borderRadius: 25,
  },
  loginbutton: {
    width: 328,
    height: 40,
    borderRadius: 24,
    backgroundColor: '#bbb',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 35,
  },
  logintext: {
    fontSize: 14,
    textAlign: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
});
