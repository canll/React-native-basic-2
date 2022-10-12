import React from 'react'
import { View,Text,StyleSheet} from 'react-native'
import Button from "../components/Button";
const Welcome = ({navigation}) => {
  
  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>Kebap Fitness Salonu</Text>
      <Button text="Üye Kaydı Oluştur" onPress={()=> navigation.navigate('MemberSign Screeen')}/>

    </View>
  )
}
const Styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',

  },
  header:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    margin:10,
  },
})


export default Welcome;