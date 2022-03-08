import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import ButtonComponent from './ButtonComponent';

export default class FooterComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
           <ButtonComponent title='Call Api using Axios' />
        <ButtonComponent title='Call Api using Fetch'/>
      </View>
    )
  }
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'grey',
        flexDirection:'row',
        borderRadius:10,
       width:360
    }
})

