
// -----Đoạn import các thư viện --------
import React, {useState,Component, useEffect }    from 'react'
import {
     StyleSheet,
      Text, 
      View ,
       TouchableOpacity,  
       SafeAreaView,
       Image,
       TextInput,

} from 'react-native'

import {useDispatch, useSelector} from 'react-redux'   // react-redux là cái cầu nối giữa react - và store(redux)
// 2 thư viện của react-redux để lấy thông tin từ kho ra
// useDispatch là gọi hành động
// useSelector là lấy thông tin ra từ view 
// BÀI 7: life Cycle trong react native 
import { updateEmail } from '../redux/actions/updateAction'    // import cái hành động 

const CallAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve({data:  'Data'}) 
      console.log('Đã trả về kết quả data')
    }, 3000)
  })
}

const getData = async (setData_getData) => {
  let data =  await CallAPI()
  setData_getData(data)
}

// -----------Hàm chính chứa page Home -----------
export default function Home({  route, navigation}) {
  const [value, setValue] = useState(1);
  const [data, setData] = useState({data: null})
  const [email, setOnChangeEmail] = useState('');
  const info = useSelector((argState) => argState.personalInfo)  // info chính là giá trị lấy về từ cái trường thông tin personalInfo lấy từ store-> reducers
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('Vừa vào màn hình')
    getData(setData)
    // console.log(`Data:  ${data}`) // Đây là code sai vì console này không thể nào đợi việc lấy data xong thì nó mới in được, vì nó là hàm gặp phát chạy luôn 
    console.log('INFO:' , info)
    // return () =>
    //  console.log('Vừa thoát màn hình ')
  }, [])

useEffect(()=> {     // Lắng nghe khi có sự thay đổi của biến data thì sẽ chạy hàm bên trong , lần load đầu tiên biến , cũng sẽ chạy các lần sau thay đổi giá trị tì chạy 
// console.log('Data đã lắng nghe là : ' , data)
},[data])
  

  return (
  <View style ={{flex:1}}>
    <SafeAreaView style= {{flex: 1}} >

        <View style= {{ height : '5%' , width: '100%' , borderBottomWidth: 2 , borderColor: '#FFC0CB', flexDirection: 'row', justifyContent: 'space-between'}} >
            <TouchableOpacity style= {{ width: '10%' , height: '100%'}}
             onPress={ () => {
                navigation.goBack()  // Trở về 1 trang trước đó
                //-- Nếu nút này là nút menu để mở menu drawer thì dùng 
                // navigation.openDrawer();
              }}
            >
                <Image source={require('../images/back2.png')} style={{ width: '100%' , height: '100%' , resizeMode:'contain'}}>

                </Image>
            </TouchableOpacity>
            <TouchableOpacity  style= {{ width: '10%' , height: '100%'}}
             onPress={ () => {
                navigation.navigate('Setting')
              }}
            >
                <Image source={require('../images/setting1.png')} style={{ width: '100%' , height: '100%' , resizeMode:'contain'}}>

                </Image>
            </TouchableOpacity>
        </View>

        <View style ={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style ={{ fontSize:40, color: 'green'}}>Home screen</Text>
      <Text style={{fontSize: 23}}>{value}</Text>
      <Text>Email: {info.email}</Text>
      <Text>Score: {info.score}</Text>
      <Text>Address: {info.address}</Text>
      <Text>Id: {info.id}</Text>
      <TouchableOpacity style={{ width : '50%' , height: 50, justifyContent: 'center', alignItems: 'center' , borderRadius: 60, backgroundColor: 'pink', marginTop: 20}}
      onPress= {() =>{
        let newValue = value+1;
        setValue(newValue)
      }}      
      >
       <Text> Đếm số</Text>

      </TouchableOpacity>

      <TextInput
      style= {{height: 40 , width: '50%' , borderWidth : 2}}
      autoCapitalize= 'none'
        onChangeText ={(argTextVuaNhap) => setOnChangeEmail(argTextVuaNhap)}
        value={email} // Gán cái giá trị mà user vừa nhập vào trong biến email
      />
      

      <TouchableOpacity 
      style ={{width: '30%' , height: 40, borderWidth : 1, borderColor: 'pink' , borderRadius : 50 , justifyContent: 'center' , alignItems : 'center', backgroundColor:'#FFB6C1'}}
      onPress={() => dispatch(updateEmail(email))}   // hàm updateEmail là tham số của dispatch này - > nó chỉ đơn giản là 1 cái object bắt buộc có 1 key là type === với type trong reducer
      // Hàm updateEmail() có nhận 1 đối số có thể là bất cứ cái gì
      >
        <Text>
          Cập nhật 
        </Text>
        </TouchableOpacity>    

        </View>
    </SafeAreaView>
  </View>
  )
}

const styles = StyleSheet.create({})