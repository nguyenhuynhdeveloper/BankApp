import React, { Component, useEffect, useRef, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Animated,
  Easing
} from 'react-native'
import { setGestureState } from 'react-native-reanimated/lib/reanimated2/NativeMethods';

// import { Easing } from 'react-native-reanimated'; // Cho 2 cái thư viên này thì lại lỗi 
// import Animated from 'react-native-reanimated' // Không cần cái thư viện này cho vào sẽ lỗi 


export default function Cart({ route, navigation }) {
  const topMotion = useRef(new Animated.Value(0)).current;  // Khai báo thành phần thay đổi 
  const spinValue = useRef(new Animated.Value(0)).current;

  const [start, setStart] = useState('START')
  // Gọi hành động để nó di chuyển 
  useEffect(() => {

    

    
    setTimeout(() => {    // Cái này chỉ để giúp sau 1s load được screen nó mới thực hiện để dev dễ nhìn 
      // Animated.timing( 
      //   topMotion , // Tham số đầu tiên là đại lượng thay đổi
      //   {           // Tham số thứ 2 là 1 Object miêu tả sự thay đổi 
      //     toValue: 600,
      //     duration: 2000 ,
      //     useNativeDriver: false , // Liên quan đến code native có hỗ trọ hay không thôi 

      //1. Di chuyển tịnh tiến đền 
      // easing: Easing.linear, 

      // 2. di chuyển ban đầu chậm tăng dần về phía sau 
      //easing: Easing.ease
      //easing: Easing.quad
      //easing: Easing.cubic
      //easing: Easing.poly(4)
      //easing: Easing.sin
      //easing: Easing.circle

      //3. Lùi lại 1 chút rồi di chuyển tới 
      // easing: Easing.back(0.8)

      //4. Di chuyển với vận tốc thay đổi 
      // easing: Easing.bezier(0.08, 0.87, 0.97, 0.1)

      //5.Nảy khi tiếp 
      // easing: Easing.bounce
      //   },
      // ) .start(); // Cái start() luôn . cuối cùng để chạy Animated

      // Làm cho cái xe nó xoay xoay như cái chuông
      Animated.loop(        // Cho loop bao quanh Animated.parallel OR Animated.sequence để lặp đi lặp lại 
        Animated.parallel([   // Cho các hành động Animated.sequence bên trong hoạt động song song với nhau 
          //-------Hoạt động tuần tự 1------
          Animated.sequence([   // Bao các Animated.timing để các Animated Chạy tuần tự  ---- Thành phần bên trong phải là 1 cái mảng
            // 1. Lắc qua bên phải 45 do
            Animated.timing(
              spinValue,
              {
                toValue: 1,
                duration: 2000,
                useNativeDriver: false
              }
            ),

            // 2. Lắc qua bên trái 90do
            Animated.timing(
              spinValue,
              {
                toValue: -1,
                duration: 4000,
                useNativeDriver: false,
              }
            ),

            // 3. Lắc qua bên Phải 45 do
            Animated.timing(
              spinValue,
              {
                toValue: 0,
                duration: 2000,
                useNativeDriver: false,
              }
            )
          ]),
          //-------Hoạt động tuần tự 2------CỨ TẠO THÀNH 1 VÒNG TUẦN HOÀN LÀ MƯỢT

          Animated.sequence([    
            Animated.timing(
              topMotion, // Tham số đầu tiên là đại lượng thay đổi
              {           // Tham số thứ 2 là 1 Object miêu tả sự thay đổi 
                toValue: 600,
                duration: 2000,
                useNativeDriver: false, // Liên quan đến code native có hỗ trọ hay không thôi 
              }),
            Animated.timing(
              topMotion, // Tham số đầu tiên là đại lượng thay đổi
              {           // Tham số thứ 2 là 1 Object miêu tả sự thay đổi 
                toValue: -100,
                duration: 2000,
                useNativeDriver: false, // Liên quan đến code native có hỗ trọ hay không thôi 
              }),
              Animated.timing(
                topMotion, // Tham số đầu tiên là đại lượng thay đổi
                {           // Tham số thứ 2 là 1 Object miêu tả sự thay đổi 
                  toValue: 600,
                  duration: 2000,
                  useNativeDriver: false, // Liên quan đến code native có hỗ trọ hay không thôi 
                }),
                Animated.timing(
                  topMotion, // Tham số đầu tiên là đại lượng thay đổi
                  {           // Tham số thứ 2 là 1 Object miêu tả sự thay đổi 
                    toValue: -100,
                    duration: 2000,
                    useNativeDriver: false, // Liên quan đến code native có hỗ trọ hay không thôi 
                  }),
          ]),
        ])

      ).start();    // . start();   ngoài cùng tất cả thẻ cha 
    }, 1000)  // 1000ms của setTimeout

  }, []) // Lắng nghe của useEffect

  // Sử dụng phép nội suy đại lượng này thay đổi bao nhiêu thì đại lượng kia thay đỏi bao nhiêu 
  const spin = spinValue.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-45deg', '0deg', '45deg']
  })

  // if (start ==='START'){
  //   Animated.timing(spinValue).start() ; 
  // }
  // else{
  //   Animated.timing(spinValue).stop() ; 
  // }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }} >

        <View style={{ height: '5%', width: '100%', borderBottomWidth: 2, borderColor: '#FFC0CB', flexDirection: 'row', justifyContent: 'space-between' }} >

          {/**-------------Phím Back-------- */}
          <TouchableOpacity style={{ width: '10%', height: '100%' }}
            onPress={() => {
              navigation.goBack()  // Trở về 1 trang trước đó
            }}>
            <Image source={require('../images/back2.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
          </TouchableOpacity>

          {/**-------------Phím Setting-------- */}

          <TouchableOpacity style={{ width: '10%', height: '100%' }}
            onPress={() => {
              navigation.navigate('Setting')
            }}>
            <Image source={require('../images/setting1.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
          </TouchableOpacity>

        </View>

        {/**-------------Phần Content -------- */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 40, color: 'green' }}>Cart screen</Text>
          <Text>Password</Text>
          
          {/** -------Animated.View */}
          <Animated.Image source={require('../images/cartImg/c2.png')} style={{ position: 'absolute', bottom: topMotion, left: 80, height: 70, width: 70, zIndex: 1 }} ></Animated.Image>
          <Animated.Image source={require('../images/cartImg/c2.png')} style={{ transform: {rotate: spin} ,  // Rồi tất cả các Animated để vào css
           position: 'absolute', bottom: 0, right: 0, height: 70, width: 70 }} ></Animated.Image>
          <TouchableOpacity style={{ width: '50%', height: 30, borderRadius: 40, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => { Animated.timing(spinValue).stop(); { start === 'START' ? setStart('STOP') : setStart('START') } }}
          >
            {start === 'START' ? <Text> Start</Text> : <Text> Stop</Text>}

          </TouchableOpacity>
        </View>



      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({})