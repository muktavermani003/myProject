import React, { Component } from 'react';
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import ButtonComponent from './ButtonComponent';
import DATA from './mockData';
import DetailScreen from './DetailScreen';

class FlatListComponent extends Component {
  constructor(props){
    super(props)
  }
    render() {
        const {item}= this.props;
        return (
            <View style={styles.container}>
              <View style={styles.list}>
            <Image source={{ uri: item.thumbnailUrl }}
              style={styles.imageIcon}/>
            <Text style={styles.data}>{item.title}</Text>
            </View>
            <View style={styles.editButton}>
               <ButtonComponent title='edit'
               onPress={()=>this.props.navigation.navigate(DetailScreen)}/>
              </View>
              
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "white",
      borderRadius: 8,
      paddingHorizontal: 10,
      margin: 10,
      elevation: 3,
      shadowOpacity: 1,
      shadowColor: "black",
     
      paddingVertical: 5
    },
    list:{
      flexDirection: 'row',
    },
    imageIcon: {
        width: 25,
        height: 25,
        borderRadius: 25,
        alignSelf: 'center',
      },
      data: {
        fontSize: 18,
        marginLeft: 10,
        justifyContent: "flex-start",
        width: '90%'
      },
      editButton:{

      }
})


export default FlatListComponent;