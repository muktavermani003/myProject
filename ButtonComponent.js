/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {
   View,
   Text, StyleSheet, TouchableOpacity
 } from 'react-native';
 
 
 
 
 
 class ButtonComponent extends Component {
   
   render() {
 const {title,onPress}=this.props
     return (
       <View style={styles.container}>
         <TouchableOpacity style={styles.button}>
             <Text style={styles.title}>{title}</Text>
         </TouchableOpacity>
          
       </View>
     )
   }
}
 
 export default ButtonComponent;
 
 const styles = StyleSheet.create({
   container: {
     //backgroundColor: 'green',
   },
   button:{
       backgroundColor:'grey',
       height:30,
       width:90,
       marginLeft:230,
       borderRadius:25,
       justifyContent:'center',
       alignItems:'center',
       margin:5
   },
   title:{
       fontSize:15,
      color:'black',
   }
 })
 