import React, { Component, useState }from "react";
import { 
    ImageBackground,
    StyleSheet, 
    Text, 
    View ,
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
export default  SignUp = ({navigation }) => 
{
  const[getPasswordVisible , setPasswordVisible] = useState(false)
  const[getEmail , setEmail] = useState('');
return (
  <ImageBackground source={require('../images/signupBG.png')} style={{flex:1}}>

  
    <SafeAreaView style={{flex: 1 }}>
          <StatusBar barStyle="light-content" />
        <View style={{height: '100%', width: '100%', alignItems: 'center'}}> 

          {/*----------Email--------------*/}

          <View style={{width: '80%', height: '20%', marginTop: 0.4 * windowHeight, alignItems: 'center'}}>
              
            <View style={{ width: '100%', height: '30%',flexDirection: 'row', justifyContent: 'space-between'}}> 
                <Text style={{ width: '30%',fontSize: 20 , fontWeight: '200', color: '#F0F8FF',marginTop: 15 , fontStyle:'normal', fontFamily:'Times New Roman'}}> Email</Text>
                <TextInput style= {{width: '70%' , textAlign: 'right' , borderBottomWidth: 1, borderColor: '#FFFFE0',color: '#E0FFFF',fontSize: 18 ,fontStyle:"normal", fontFamily:'Times New Roman'}}
                autoCapitalize='none'
                value={getEmail} 
                onChangeText={(text) => setEmail(text)}
                ></TextInput>
            </View>
          {/*---------- Password--------------*/}

            <View style={{ width: '100%', height: '30%',flexDirection: 'row',  justifyContent: 'space-between'}}> 
            <Text style={{ fontSize: 20 , fontWeight: '200', color: '#F0F8FF',marginTop: 15,fontStyle:'normal', fontFamily:'Times New Roman' }}> Password</Text>
              <TextInput style= {{ width: '70%', textAlign: 'right',paddingRight: 50,  borderBottomWidth: 1, borderColor: '#FFFFE0', color: '#E0FFFF',fontSize: 18 ,fontStyle:'normal', fontFamily:'Times New Roman'}}
              secureTextEntry={getPasswordVisible}
              >
              </TextInput>   
          {/*---------- Set con mắt --------------*/}

              <TouchableOpacity 
              style={{height: '70%', width: 40, position: 'absolute', right: 0, bottom: 0 }}
              onPress={() => {
                setPasswordVisible(!getPasswordVisible)
              }}
              >
                {getPasswordVisible ?
              <Image source={require('../images/eyeOn1.png')}  style={{height: '100%', width: '100%'}} resizeMode='cover'/>       
              : <Image source={require('../images/eyeOff.png')}  style={{height: '100%', width: '100%'}} resizeMode='cover'/>   }    
              </TouchableOpacity>
            </View>
  
          </View>
  
          {/*-----------Buttons Register -----------*/}
          <View style={{width: '100%', height: '20%', marginTop: 0.15* windowHeight, flexDirection: 'row' , justifyContent: 'space-around' , alignItems: 'center'}}>  
  
              <TouchableOpacity 
              style={{ width: '40%', height: '30%', borderWidth :2, borderRadius: 20, justifyContent: 'center', alignItems: 'center',  backgroundColor: '#2F4F4F'}}
              onPress={ () => {
                navigation.popToTop()
              }}
              >
                  <Text style={{ color: '#fff', fontSize: 23, fontWeight: 'bold'}}> Đăng Ký</Text>
              </TouchableOpacity>

             
          </View>
        </View>
      </SafeAreaView>
      </ImageBackground>
  
  )
}




