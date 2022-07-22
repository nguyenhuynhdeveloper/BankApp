import React , {useState} from 'react'
import {
     StyleSheet,
      Text, 
      View ,
       TouchableOpacity, 
       SafeAreaView,
       Image,

} from 'react-native'
const SETTING_MY_ACCOUNT = 'SETTING_MY_ACCOUNT'

const SETTING ='SETTING'

export default function Setting({route, navigation}) {

const [settingMyAccount , setSettingMyAccount] = useState(SETTING_MY_ACCOUNT)
const [hideBar, setHideBar ] = useState (SETTING)


    return (
          <View style ={{flex:1}}>
      <SafeAreaView style= {{flex: 1}} >
  {/** -----Phím Back ---------- */}
          <View style= {{ height : '5%' , width: '100%' , borderBottomWidth: 2 , borderColor: '#FFC0CB',flexDirection: 'row', justifyContent: 'space-between'}} >
              <TouchableOpacity style= {{ width: '10%' , height: '100%'}}
               onPress={ () => {
                navigation.goBack()
              }}>
                  <Image source={require('../images/back2.png')} style={{ width: '100%' , height: '100%', resizeMode:'contain'}} />
              </TouchableOpacity>  
          </View>


          <View style= {{ height : '6%' , width: '100%'  , borderColor: '#FFC0CB',flexDirection: 'row', justifyContent: 'space-between', }} >
  
  {/** -----Phím Chuyển trang Setting My Account ---------- */}
            <TouchableOpacity  style={{  width : '50%', height: '100%',alignItems: 'center', justifyContent:'center'}}
             onPress={()=>  {setSettingMyAccount(SETTING_MY_ACCOUNT) ; setHideBar(SETTING)} }
             disabled={ hideBar === SETTING ? true : false}
            >
              <Text style= {{fontSize: 20, color: 'green'}}>
                Setting My Account
              </Text>
              
              
                {hideBar === SETTING ? <View style={{ position : 'absolute', bottom: 0,backgroundColor:'green' , height: 3, width: '100%'}}></View> : null}
               
            
            </TouchableOpacity>

  {/** -----Phím Chuyển trang Setting My Shop ---------- */}
            <TouchableOpacity  style={{ flex: 1,  alignItems: 'center', justifyContent:'center'}}
            onPress={()=> {setSettingMyAccount('') ; setHideBar('')}}
            disabled={ hideBar === '' ? true : false}
            >
              <Text style= {{fontSize: 20, color: 'green'}}>
                Setting My Shop
              </Text>
              {hideBar === '' ? <View style={{ position : 'absolute', bottom: 0,backgroundColor:'green' , height: 3, width: '100%'}}></View> : null}

            </TouchableOpacity>

          </View>

           

          {settingMyAccount === SETTING_MY_ACCOUNT?  <MyAccountSetting navigation= {navigation} /> :<MyShopSetting/>   }
      

      </SafeAreaView>
          </View>
    )
  }
  


  const MyAccountSetting = (props) => {
    return(

      <View style ={{ height: '70%', justifyContent: 'center', alignItems: 'center'}}>
      <Text style ={{ fontSize:40, color: 'green'}}>Setting screen</Text>
      <TouchableOpacity style ={{ height : '10%', width: '40%', borderWidth : 2, borderRadius: 50, borderColor: 'pink', justifyContent: 'center', alignItems:'center'}}
      onPress={ () => {
          // navigation.navigate('Login')
          // Or có thể dùng pop mà truyền số trang cần lùi
          // navigation.pop(2)
          //  Không quan tâm là được bao nhiêu bước về trang đầu tiên 
          props.navigation.popToTop()

        }}
      >
          <Text style={{ fontSize :24, color : '#9932CC'}}> Logout</Text>
      </TouchableOpacity>
        </View>
    )
   
    
  }


 const MyShopSetting =() => {
    return ( null
    
      // <View style ={{ height: '70%', justifyContent: 'center', alignItems: 'center'}}>
      // <Text style ={{ fontSize:40, color: 'green'}}>Setting screen</Text>
      // <TouchableOpacity style ={{ height : '10%', width: '40%', borderWidth : 2, borderRadius: 50, borderColor: 'pink', justifyContent: 'center', alignItems:'center'}}
      // onPress={ () => {
      //     // navigation.navigate('Login')
      //     // Or có thể dùng pop mà truyền số trang cần lùi
      //     // navigation.pop(2)
      //     //  Không quan tâm là được bao nhiêu bước về trang đầu tiên 
      //     navigation.popToTop()

      //   }}
      // >
      //     <Text style={{ fontSize :24, color : '#9932CC'}}> Logout</Text>
      // </TouchableOpacity>
      //   </View>
    )
  }