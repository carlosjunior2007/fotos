import React , { Component } from "react";
import { Text,View } from "react-native-web";

export default class CreatePost extends Component{
    render(){
        return(
            <view
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems:"center"
            }}
            >
                <Text> Crear publicacion </Text>
            </view>
        )
    }
}