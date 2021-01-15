import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'

export default class loadAuth extends Component {
    constructor(props){
        super(props)
        this.checkAuth()
    }
    checkAuth = async() =>{
        let authenticated = 1;//do the logic here
        if(authenticated){
            this.props.navigation.navigate('App')
        }else{
            this.props.navigation.navigate('Auth')
        }
    }
    render() {
        return (
            <View>
                <ActivityIndicator />
            </View>
        )
    }
}
