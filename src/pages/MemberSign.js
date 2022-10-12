import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
const MemberSign = (props) => {
  const [userName, setUserName] = useState(null);
  const [userSurName, setUserSurName] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMeil, setUserMeil] = useState(null);
  const [userHomeTown, setUserHomeTown] = useState(null);

  const handleSubmit = () => {
    if(!userName ||
      !userSurName ||
      !userAge ||
      !userMeil ||
      !userHomeTown
          ){
            Alert.alert('Kebap Fitness SALONU', 'BİLGİLER BOŞ BIRAKILAMAZ')
            return;
          }
    const user={
    userName, userSurName, userAge, userMeil, userHomeTown,
    }
    console.log(user);
    props.navigation.navigate('MemberResult Screeen',{user})
    
  };
  
  return (
    <View>
      <Input
        label=" ADI"
        placeholder="Üye İsmini giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label=" SOYİSİM"
        placeholder="Üye Soyİsmini giriniz..."
        onChangeText={setUserSurName}
      />
      <Input
        label=" YAŞ"
        placeholder="Üye Yaşını giriniz..."
        onChangeText={setUserAge}
      />
      <Input
        label=" E-POSTA"
        placeholder="Üye E-posta adresini giriniz..."
        onChangeText={setUserMeil}
      />
      <Input
        label="iKAMET"
        placeholder="Üye Yaşadığı şehri giriniz..."
        onChangeText={setUserHomeTown}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </View>
  );
};

export default MemberSign;
