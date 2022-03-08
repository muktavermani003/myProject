import React, { Component } from 'react';
import {
  View,
  FlatList, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import DATA from './mockData';
import HeaderComponent from './HeaderComponent';
import DetailScreen from './DetailScreen';
//import PullToRefreshViewNativeComponent from 'react-native/Libraries/Components/RefreshControl/PullToRefreshViewNativeComponent';


class Screen1 extends Component {
  constructor(props) {
    console.log('constructor call')
    super(props)
    this.state = {
      isLoading: true,
      loadingExtraData: false,
      page: 1,
      randomUserData: [],
      data: '',
      dataS: [],
      refresh:false,
      
    }
  }
  LoadMoreRandomData = () => {
    this.setState({
      page: this.state.page + 1
        .limit(8)
        .get()
    })
  }
  deleteItemById = id => {
    const filteredData = this.state.data.filter(item => item.id !== id);
    this.setState({ data: filteredData });
  }
  componentDidMount() {
    console.log('abcde')
    const openSubscription = this.props.navigation.addListener("focus", ()=>{
      this.callApi()
      });
      
      return () => openSubscription.remove();
      
  }
  callApi=()=>{
    fetch("https://gorest.co.in/public/v2/users",
      {
        method: "GET",
        headers: {
            "Content-type": "application/json", 'Authorization': 'Bearer 8055de5d75bbcc4b304425de7b6925c25a0c943716ea91869af820fcebf55d4b',
        },
    })
    .then(response => response.json())
    .then((responseJson) => {
      this.setState({
        dataS: responseJson,
      })
    })
  
    .catch(error => console.log(error)) //to catch the errors if any
  }
  handleRefresh=()=>{
    this.setState={
      refresh:true
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          padding={30}
          data={this.state.dataS}
          refreshing={this.state.refresh}
          onRefresh={this.handleRefresh}
          renderItem={({ item }) =>
            <View>
              <View style={styles.card}>
                <Text style={{ height: 50 }}>{item.name}  </Text>
                <Text style={{ height: 50 }}>{item.gender}</Text>
                <View>
                  <TouchableOpacity style={styles.button}
                  onPress={()=>this.props.navigation.navigate('DetailScreen',{data:item})}>
                    <Text>edit</Text>
                  </TouchableOpacity>
                </View>
              </View>


            </View>
          }
        />

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    //padding:10
  },
  card: {
    backgroundColor: 'white',
    marginVertical: 8,
    borderRadius: 10,
    elevation: 1,
    shadowOpacity: 1,
    shadowColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    marginTop: 20,
    backgroundColor: 'grey',
    width: 40,
    height: 25,
    borderRadius: 18,
    justifyContent:'center',
    alignItems:'center'
  },
})
export default Screen1;