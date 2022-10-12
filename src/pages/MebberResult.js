import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const MebberResult = ({route}) => {
    const {user} = route.params
    
  return (

    <View>
        <Text style={styles.message}>KAYIT BAŞARILI</Text>
        <Text style={styles.label}>adı:{user.userName}</Text>
        <Text style={styles.label}>SoyADI:{user.userSurName}</Text>
        <Text style={styles.label}>YAŞ:{user.userAge}</Text>
        <Text style={styles.label}>E-MEİL:{user.userMeil}</Text>
        <Text style={styles.label}>İKAMET:{user.userHomeTown}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    message:{
        fontSize:20,
        margin:10,
        marginBottom:10,
        fontWeight:'bold'
    },
    label:{
        fontSize:20,
        margin:10,
        fontWeight:'bold'
    }
})

export default MebberResult