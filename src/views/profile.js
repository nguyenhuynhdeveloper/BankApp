import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,

} from 'react-native'
import { useSelector , useDispatch} from 'react-redux'
import axios from 'axios'
const URL = `http://localhost:3000`



export default function Profile({ route, navigation }) {
  // const {route , navigation} = props
  // const {goBack , navigate} = navigation

  const info = useSelector((argState) => argState.personalInfo)   // Đây chính là lấy thông tin từ store bằng hàm lấy thông tin useSelector() bên trong đối số của nó là 1 hàm 
  const [duLieu, setDuLieu] = useState('')

  // ------Phần call API ---- Sử dụng fetch 
  const callGETUrl = async () => {
    console.log('Calling.....GET')

    return fetch(URL)
      .then(res => res.json())
      .then(async (res) => {
       await setDuLieu(JSON.stringify(res))   // Đây chỉ là gán cái dữ liệu được trả về từ Api vào cái biến có setState() thôi
      })
      .catch(err => console.log('ERROR : ', err))

  }
  // ------Phần call API ---- Sử dụng axios thư viện ngol hơn fetch  // có khả năng cancel vì axios hỗ trợ setTimeout quá bao nhiêu thời gian là k đợi nữa 
  // Khi dùng axios thì nên try catch nó Khi dùng async await thì là xử lí các axios gọi đẩy lấy dữ liệu thì nên đặt trong khối try catch để bất cứ câu lệnh nào ở khối try sai || reject thì sẽ bỏ qua hết các câu lệnh dưới , và lọt và Khối catch luôn 

  //--------GET : lấy dữ liệu về 
  const callGETUrlWithId = async (id) => {
    console.log('Calling.....GET')
    try {
      const res = await axios.get(`${URL}/${id}`)
      setDuLieu(JSON.stringify(res.data))
    }

    catch (error) {
      setDuLieu(JSON.stringify(error.message))
    }
  }

  //-------POST : Đẩy dữ liệu lên trên Api
  const callPOST = async () => {
    console.log('Calling.....POST')
    try{
      const res = await axios.post(`${URL}/`,{
        "userName": "nguyenhuynh",
        "age": 18
      })
      setDuLieu(JSON.stringify(res.data))
    }
    catch(error){
      setDuLieu(JSON.stringify(error.message))
    }
  }

  const callPOSTWithQuery = async (userName, age) => {
    console.log('Calling.....POST with query')
    try {
      const res = await axios.post(`${URL}/query?userName=${userName}&age=${age}`)
      setDuLieu(JSON.stringify(res.data))
    }
catch(error){
  setDuLieu(JSON.stringify(error.message))
}
  }



  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }} >
        {/**---------Phím back ----------- */}
        <View style={{ height: '5%', width: '100%', borderBottomWidth: 2, borderColor: '#FFC0CB', flexDirection: 'row', justifyContent: 'space-between' }} >
          <TouchableOpacity style={{ width: '10%', height: '100%' }}
            onPress={() => {
              navigation.goBack()  // Trở về 1 trang trước đó
            }}
          >
            <Image source={require('../images/back2.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
          </TouchableOpacity>

          {/**---------Phím Setting ----------- */}
          <TouchableOpacity style={{ width: '10%', height: '100%' }}
            onPress={() => {
              navigation.navigate('Setting')
            }}
          >
            <Image source={require('../images/setting1.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
          </TouchableOpacity>
        </View>
        {/**---------Phần content ----------- */}

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 40, color: 'green' }}>Profile screen</Text>

          {/**---------Phần lấy thông tin từ store redux  ----------- */}
          <Text>Email: {info.email}</Text>
          <Text>Score: {info.score}</Text>
          <Text>Address: {info.address}</Text>
          <Text>Id: {info.id}</Text>

          {/**---------Phần lấy thông tin từ backend lấy từ node express ----------- */}
          <View style={{ flexDirection: 'row' }}>

            <TouchableOpacity
              onPress={() => callGETUrl()}
            >
              <Text style={{ borderColor: 'pink', borderWidth: 1, borderRadius: 10, marginRight: 9 }}>GET</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => callGETUrlWithId(12)}
            >
              <Text style={{ borderColor: 'pink', borderWidth: 1, borderRadius: 10, marginRight: 9 }}>GET with Id</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => callPOST()}
            >
              <Text style={{ borderColor: 'pink', borderWidth: 1, borderRadius: 10, marginRight: 9 }}>POST</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => callPOSTWithQuery( 'nguyenhuynh' , 18)}
            >
              <Text style={{ borderColor: 'pink', borderWidth: 1, borderRadius: 10, marginRight: 9 }}>QUERY</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={{ flex: 1, borderWidth: 2, margin: 20 }}>
          <Text>{duLieu}</Text>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({})