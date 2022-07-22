import React, { Component, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  TextInput,
  Image,
}
  from "react-native";
import { get } from "react-native/Libraries/Utilities/PixelRatio";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Mỗi màn hình đều có 1 props mặc định là navigation giúp nhảy từ trang này sang trang khác
export default   Login = ({ navigation }) => {
  const [getPasswordVisible, setPasswordVisible] = useState(false)
  const [getEmail, setEmail] = useState('');
  const [email, setOnChangeEmail] = useState('')
  const [isValidEmail, setValidEmail] = useState(true)
  const[ phone , setOnChangePhone] = useState('')
  const [isValidPhone, setIsValidPhone] =useState(true)

  //--------Hàm để validate Text Input----------
  const verifyEmail = (email) => {
    const regex= new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    // if(!email) return true   //  cách 2 Khi chưa có giá trị nào thì luôn k hiện
    if(regex.test(email)){
      return true
    }
    return false
  }

  const verifyPhone = (phone) => {
    const regex = new RegExp(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/)
    // if(!phone) return true    //  cách 2 Khi chưa có giá trị nào thì luôn k hiện
    if(regex.test(phone)){
      return true
    }
    return false
  }


  return (
    <ImageBackground source={require('../images/bg4.png')}
      style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>

          {/*--------------Email--------------*/}

          <View style={{ width: '80%', height: '20%', marginTop: 0.4 * windowHeight, alignItems: 'center' }}>

            <View style={{ width: '100%', height: '30%', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ width: '30%', fontSize: 20, fontWeight: '200', color: '#8A2BE2', marginTop: 15, fontStyle: 'normal', fontFamily: 'Times New Roman' }}> Email</Text>
              <TextInput style={{ width: '70%', textAlign: 'right', borderBottomWidth: 1, borderColor: '#9400D3', color: 'black', fontSize: 18, fontStyle: "normal", fontFamily: 'Times New Roman' }}
                autoCapitalize='none'
                value={getEmail || email}
                onChangeText={(text) => {setEmail(text) ; setOnChangeEmail(text) ;
                  const isValid = verifyEmail(text);
                  if(text.length == 0) {
                    return setValidEmail(true)
                  }
                  return  isValid ? setValidEmail(true) : setValidEmail(false)

                }
              
              }   // text là những cái được nhập vào từ bàn phím 
              // Or có thể viết 
              // onChangeText={setEmail}

              
              ></TextInput>
            </View>
              <Text style = {{width: '80%', height: 20, alignItems: 'center', fontSize: 16, paddingLeft: 60, color:'#FA8072'}}> {isValidEmail ? '': 'Email is invalid!'}</Text>

          {/*--------------Password--------------*/}

            <View style={{ width: '100%', height: '30%', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 20, fontWeight: '200', color: '#8A2BE2', marginTop: 15, fontStyle: 'normal', fontFamily: 'Times New Roman' }}> Password</Text>
              <TextInput style={{ width: '70%', textAlign: 'right', paddingRight: 50, borderBottomWidth: 1, borderColor: '#9400D3', color: 'black', fontSize: 18, fontStyle: 'normal', fontFamily: 'Times New Roman' }}
                secureTextEntry={getPasswordVisible} // Đưa giá trị true false vào để ẩn hiện mật khẩu 
                onChangeText ={(text) => {
                  setOnChangePhone(text);
                  const isValid = verifyPhone(text);
                  if(text.length == 0) {
                    return setIsValidPhone(true)
                  }
                 return  isValid ? setIsValidPhone(true) : setIsValidPhone(false);
                }}
                value ={phone}
                keyboardType ='numeric'
              ></TextInput>

              <TouchableOpacity 
                style={{ height: '70%', width: 40, position: 'absolute', right: 0, bottom: 0 }}
                onPress={() => {
                  setPasswordVisible(!getPasswordVisible)
                }}
              >

          {/*--------------Set con mắt ẩn hiện --------------*/}
                {getPasswordVisible ?
                  <Image source={require('../images/eyeOn1.png')} style={{ height: '100%', width: '100%' }} resizeMode='cover' />
                  : <Image source={require('../images/eyeOff.png')} style={{ height: '100%', width: '100%' }} resizeMode='cover' />}
              </TouchableOpacity>
            </View>
            <Text style = {{width: '80%', height: 20, alignItems: 'center', fontSize: 16, paddingLeft: 60, color:'#FA8072'}}> {isValidPhone?'':  'Phone number is invalid!'}</Text>


          </View>

          {/*---------------- Buttons login & Register------------ */}
          <View style={{ width: '100%', height: '20%', marginTop: 0.15 * windowHeight, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>

            <TouchableOpacity
              style={{ width: '40%', height: '30%', borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF00FF', opacity: .5 }}
              onPress={() => {
                navigation.navigate('ContentTabs')
              }}
            >
              <Text style={{ color: '#fff', fontSize: 23, fontWeight: 'bold' }}> Đăng nhập</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: '40%', height: '30%', borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF00FF', opacity: .5 }}
              onPress={
                () => (
                  navigation.navigate('SignUp')
                )}
            >
              <Text style={{ color: '#fff', fontSize: 23, fontWeight: 'bold' }}> Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>

  )
}






