import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image
} 
from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import 'react-native-gesture-handler';    //Để sử dụng drawer cử chỉ tay
// import { createDrawerNavigator } from '@react-navigation/drawer';  // Để tạo ra 1 drawer 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Để mà sài được redux
import { Provider } from 'react-redux';    // Provider là các nhà cung cấp
import { store } from '../redux/store'     // import cái kho vào 



import Login from './login'
import Home from './home'
import Setting from './setting' 
import Profile from './profile' 
import Product from './product' 
import Cart from './cart'
import SignUp from './signup'
import YoutubeDes from './youtubeDes';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MyTabs(){

  return (
    
  // --------------------Drawer Menu----------------------  
  // -------Nhóm màn hình mà có mặt ở  drawer menu bên trái khi vuốt tay --------------- Tab chính là TabBottom 

  // <Drawer.Navigator initialRouteName = 'Home' screenOptions={{headerShown: false }}>
  //   <Drawer.Screen name='Home' component= {Home} /> 
  //   <Drawer.Screen name='Product' component= {Product} />  
  //   <Drawer.Screen name='Profile' component= {Profile} />  
  //   <Drawer.Screen name='Cart' component= {Cart} />  
  //   <Drawer.Screen name='Setting' component= {Setting} /> 
  //   <Drawer.Screen name='SignUp' component= {SignUp} />      
  // </Drawer.Navigator>

  // --------------------Tab Menu----------------------  
  // -------Nhóm màn hình mà có mặt ở tab bottom --------------- Tab chính là TabBottom 
// Khai báo ra 1 nhóm riêng để có thể phân biệt chức năng với các screen khác- Đây chính là nhóm contents chính -- Được bao bởi thẻ <Tab.navigator> 


  <Tab.Navigator initialRouteName = 'Home' screenOptions={{headerShown: false }} style={{ }}
  >

  <Tab.Screen name='Home' component= {Home} 
options={{ 
     tabBarIcon: () => (<Image source={require('../images/home.jpeg')} 
     style={{width: '50%' , height: '100%'}} resizeMode = 'stretch'/> 
     )
     }}
     
     /> 

  
  <Tab.Screen name='Product' component= {Product} 
options={{
  tabBarIcon: () => (
    <Image source={require('../images/product.png')} style={{width: '50%' , height: '100%'}} resizeMode = 'stretch'/>
  )
}}/>    

  
 <Tab.Screen name='Cart' component= {Cart} 
options={{
  tabBarIcon: () => (
    <Image source={require('../images/cart1.png')} style={{width: '50%' , height: '100%'}} resizeMode = 'stretch'/>
  )
}}/>  

  
  <Tab.Screen name='Profile' component= {Profile}
options={{
  tabBarIcon: () => (
    <Image source={require('../images/profile1.png')} style={{width: '50%' , height: '100%'}} resizeMode = 'stretch'/>
  )
}}/>           
         
</Tab.Navigator>
  )
}

export default function RootComponent() {
  return (
  
  //  <Login/>
  //  <Home/>
  //  <Setting/>




//-------Stack chính là khai báo các màn hình Screen sẽ có - nó bao gồm các màn hình rời và nhóm màn hình nằm trong Drawer - Tab
// Bao hết tất cả trang bằng Provider để tất cả có thể truy cập tới cái kho store này 
  <Provider store={store}>  

  <NavigationContainer>  

    <Stack.Navigator initialRouteName = 'Login' screenOptions={{headerShown: false }}>
      <Stack.Screen name='Login' component= {Login} /> 
      <Stack.Screen name='ContentTabs' component= {MyTabs} />  
      <Stack.Screen name='Setting' component= {Setting} /> 
      <Stack.Screen name='SignUp' component= {SignUp} />      
      <Stack.Screen name='YoutubeDes' component= {YoutubeDes} />      
    </Stack.Navigator>


  </NavigationContainer>
 
  </Provider>
   
  )
}

const styles = StyleSheet.create({

})

