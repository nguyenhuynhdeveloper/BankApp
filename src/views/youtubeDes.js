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
import YouTube from 'react-native-youtube';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Mỗi màn hình đều có 1 props mặc định là navigation giúp nhảy từ trang này sang trang khác
export default  YoutubeDes = ({navigation }) => 
{
  const[getPasswordVisible , setPasswordVisible] = useState(false)
  const[getEmail , setEmail] = useState('');

  const [isReady, setIsReady ] = useState(false);
  const [status, setStatus] = useState(null)
  const [quality, setQuality] = useState(null)
  const [error, setError] = useState(null)

return (
  <ImageBackground source={require('../images/signupBG.png')} style={{flex:1}}>

  
    <SafeAreaView style={{flex: 1 }}>
    <YouTube
    apiKey="AIzaSyANRuHwYixaFpvBTTSpJum2W3nk6YiUqr0"
  videoId="AMEcWz8TTlM" // The YouTube video ID
  play ={false} // control playback of video with true/false
  fullscreen  ={true}// control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => setIsReady(true)}
  onChangeState={e => setStatus(e.state)}
  onChangeQuality={e => setQuality(e.quality)}
  onError={e => setError(e.error)}
  style={{ alignSelf: 'stretch', height: 300 }}
/> 
      </SafeAreaView>
      </ImageBackground>
  
  )
}



