import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

class HeaderComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Category</Text>
                <Image source={require('./image/iconNotification.png')}
                    style={styles.icon} />
                <Image source={require('./image/iconSearch.png')}
                    style={styles.iconSearch} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',

    },
    header: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: '#394e59',
        marginLeft: 10,
        paddingVertical: 10
    },
    icon: {
        height: 45,
        width: 40,
        resizeMode: 'contain',
        position: 'absolute',
        right: 10,
    },
    iconSearch:{
        width:20,
        height:20,
        position: 'absolute',
        right: 50,
        bottom: 10,
    }
})
export default HeaderComponent;