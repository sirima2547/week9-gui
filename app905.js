import React from 'react'
import {View,Text,Image} from 'react-native'

const type=(props)=>{
  return(
    <View>
      <Text>Type {props.name}</Text>
    </View>
  )
}

const  Banana=()=>{
  let pic={
    uri:'https://kazi.store/wp-content/uploads/2020/06/Chiquita_Banana_Class_Extra_Yellow.jpg',
  }
  return(
    <View style={{backgroundColor:'greenyellow',alignItems:"center"}}>
      <Image
      style={{widt:250,hight:250,marginTop:20}}
      source={pic} />
      <Text>Hello, I am a Banana</Text>
      <typeBanana name='1.Cavendish Banana' />
    </View>
  )
}
export default Banana;