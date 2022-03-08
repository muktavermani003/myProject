import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import HeaderComponent from './HeaderComponent';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataS: [],
      refreshing:false
    };
  }
  handleRefresh=()=>{
    this.setState={
      refreshing:true
    }
  }
   callApi=()=>{
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        isLoading: false,
        dataS: responseJson,
      });
    })
    .catch(error => {
      console.log(error);
    });
  }
  componentDidMount() {
    this.callApi()
  }
  renderItem = ({item}) => {
    return (
      <View style={styles.con1}>
        <View style={styles.item}>
          <Text style={{fontSize: 20}}>{item.login}</Text>
        </View>
      </View>
    );
  };
  render() {
    let {dataS, isLoading} = this.state;
    return (
      <View style={styles.container}>
        <FlatList
        isLoading={true}
          data={dataS}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
    alignItems: 'center',
    paddingTop: 50,
  },
  item: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#eee',
  },
  con1: {
    backgroundColor: 'white',
    flexDirection: 'column',
    margin: 5,
    width: 300,
    borderRadius:8,
    elevation:4,
    shadowOpacity:1,
    shadowColor:'black'
  },
});





