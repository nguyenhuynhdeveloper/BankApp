import React , {Component, useState , useEffect, useRef }from 'react'
import {
     StyleSheet,
      Text, 
      View ,
       TouchableOpacity, 
       SafeAreaView,
       Image,
       ScrollView,   // Dùng để tạo cuộn theo chiều dọc -ngang
       Dimensions,   // Lấy kích thước của màn hình 

} from 'react-native'
import { CALLBACK_TYPE } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture';

const {width : screenWidth} = Dimensions.get('window')   // Lấy được chiều rộng của màn hình và đặt lại tên cho nó là screenWidth

export default function Product({  route, navigation}) {
  const[imageList, setImageList] = useState([])
  const[currentImage , setCurrentImage] = useState(0)
  const stepCarousel = useRef(0);  //Mới ban đầu chưa có gì thì là null  khi hình ảnh được load lên thì gán lại cái giá trị step_Carousel = cái scrollView qua cái useRef

//------ Danh mục sản phẩm   
  useEffect(() => {
    //1. Load data từ server 
    const data =[
      {
        image: <Image source={require('../images/slider/p9.jpeg')} style={{ flex: 1  ,resizeMode: 'contain'}}  ></Image>,
        nameProduct : <Text style={{height: 20}}>Tên sản phẩm </Text>,
        content: <Text style={{height: 20}}> Mô tả sản phẩm  </Text>
      }, 
      {
        image: <Image source={require('../images/slider/p10.jpeg')}  style={{ flex: 1  ,resizeMode: 'contain'}}    ></Image>,
        nameProduct : <Text style={{height: 20}}>Tên sản phẩm </Text>,
        content:  <Text style={{height: 20}}> Mô tả sản phẩm  </Text>
      },
      {
        image: <Image source={require('../images/slider/p3.jpeg')}    style={{flex: 1  , resizeMode: 'contain'}}   ></Image>,
        nameProduct : <Text style={{height: 20}}>Tên sản phẩm </Text>,
        content:  <Text style={{height: 20}}> Mô tả sản phẩm  </Text>
      },
      {
        image: <Image source={require('../images/slider/p4.jpeg')}     style={{flex: 1  , resizeMode: 'contain'}}  ></Image>,
        nameProduct : <Text style={{height: 20}}>Tên sản phẩm </Text>,
        content:  <Text style={{height: 20}}> Mô tả sản phẩm  </Text>
      },
      {
        image: <Image source={require('../images/slider/p5.jpeg')}     style={{flex: 1  , resizeMode: 'contain'}}  ></Image>,
        nameProduct : <Text style={{height: 20}}>Tên sản phẩm </Text>,
        content:  <Text style={{height: 20}}> Mô tả sản phẩm  </Text>
      },
      {
        image: <Image source={require('../images/slider/p6.jpeg')}     style={{flex: 1  , resizeMode: 'contain'}}  ></Image>,
        nameProduct : <Text style={{height: 20}}>Tên sản phẩm </Text>,
        content:  <Text style={{height: 20}}> Mô tả sản phẩm  </Text>
      },
      {
        image: <Image source={require('../images/slider/p7.jpeg')}     style={{flex: 1  , resizeMode: 'contain'}}  ></Image>,
        nameProduct : <Text style={{height: 20}}>Tên sản phẩm </Text>,
        content:  <Text style={{height: 20}}> Mô tả sản phẩm  </Text>
      },
      {
        image: <Image source={require('../images/slider/p8.jpeg')}     style={{flex: 1  , resizeMode: 'contain'}}  ></Image>,
        nameProduct : <Text style={{height: 20}}>Tên sản phẩm </Text>,
        content:  <Text style={{height: 20}}> Mô tả sản phẩm  </Text>
      },
      {
        image: <Image source={require('../images/slider/p1.jpeg')}    style={{flex: 1  , resizeMode: 'contain'}}   ></Image>,
        nameProduct : <Text style={{height: 20}}>Tên sản phẩm </Text>,
        content:  <Text style={{height: 20}}> Mô tả sản phẩm  </Text>
      },
      {
        image: <Image source={require('../images/slider/p2.jpeg')}     style={{flex: 1  , resizeMode: 'contain'}}  ></Image>,
        nameProduct : <Text style={{height: 20}}>Tên sản phẩm </Text>,
        content:  <Text style={{height: 20}}> Mô tả sản phẩm  </Text>
      },

    ];

    //2. Cập nhật lên state của screen 
    setImageList(data)
  }, [])

//--------Đồ nữ------------

  const[femaleList, setFemaleList] = useState([])
  useEffect(() => {
    //1. Load data từ server 
    const female =[
      {
        image: <Image source={require('../images/slider/g1.jpeg')} style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      }, 
      {
        image: <Image source={require('../images/slider/g2.jpeg')}  style={{flex: 1 , width: '100%', height: 'auto'}}    ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/g3.jpeg')}    style={{flex: 1 , width: '100%', height: 'auto'}}   ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/g4.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/g5.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/g6.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/g7.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/g8.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/g9.jpeg')}    style={{flex: 1 , width: '100%', height: 'auto'}}   ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/g10.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },

    ];

    //2. Cập nhật lên state của screen 
    setFemaleList(female)
  }, [])

// --------Đồ nam-----------
  
  const[maleList, setMaleList] = useState([])
  useEffect(() => {
    //1. Load data từ server 
    const male =[
      {
        image: <Image source={require('../images/slider/n1.jpeg')} style={{flex: 1 , resizeMode: 'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      }, 
      {
        image: <Image source={require('../images/slider/n2.jpeg')}  style={{flex: 1 ,  resizeMode: 'contain'}}    ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/n3.jpeg')}    style={{flex: 1 ,  resizeMode: 'contain'}}   ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/n4.jpeg')}     style={{flex: 1 ,  resizeMode: 'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/n5.jpeg')}     style={{flex: 1 ,  resizeMode: 'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/n6.jpeg')}     style={{flex: 1 ,  resizeMode: 'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/n7.jpeg')}     style={{flex: 1 ,  resizeMode: 'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/n8.jpeg')}     style={{flex: 1 ,  resizeMode: 'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/n9.jpeg')}    style={{flex: 1 ,  resizeMode: 'contain'}}   ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/n10.jpeg')}     style={{flex: 1 ,  resizeMode: 'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/n11.jpeg')}    style={{flex: 1 ,  resizeMode: 'contain'}}   ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/n12.jpeg')}     style={{flex: 1 ,  resizeMode: 'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
    ];

    //2. Cập nhật lên state của screen 
    setMaleList(male)
  }, [])


// --------Đồ váy nữ-----------
  
    const[dressList, setDressList] = useState([])
    useEffect(() => {
      //1. Load data từ server 
      const dress =[
        {
          image: <Image source={require('../images/slider/v1.jpeg')} style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
          nameProduct : 'Tên sản phẩm ',
          content: 'Mô tả sản phẩm '
        }, 
        {
          image: <Image source={require('../images/slider/v2.jpeg')}  style={{flex: 1 , width: '100%', height: 'auto'}}    ></Image>,
          nameProduct : 'Tên sản phẩm ',
          content: 'Mô tả sản phẩm '
        },
        {
          image: <Image source={require('../images/slider/v3.jpeg')}    style={{flex: 1 , width: '100%', height: 'auto'}}   ></Image>,
          nameProduct : 'Tên sản phẩm ',
          content: 'Mô tả sản phẩm '
        },
        {
          image: <Image source={require('../images/slider/v4.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
          nameProduct : 'Tên sản phẩm ',
          content: 'Mô tả sản phẩm '
        },
        {
          image: <Image source={require('../images/slider/v5.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
          nameProduct : 'Tên sản phẩm ',
          content: 'Mô tả sản phẩm '
        },
        {
          image: <Image source={require('../images/slider/v6.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
          nameProduct : 'Tên sản phẩm ',
          content: 'Mô tả sản phẩm '
        },
        {
          image: <Image source={require('../images/slider/v7.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
          nameProduct : 'Tên sản phẩm ',
          content: 'Mô tả sản phẩm '
        },
        {
          image: <Image source={require('../images/slider/v2.jpeg')}  style={{flex: 1 , width: '100%', height: 'auto'}}    ></Image>,
          nameProduct : 'Tên sản phẩm ',
          content: 'Mô tả sản phẩm '
        },
        
      ];
  
      //2. Cập nhật lên state của screen 
      setDressList(dress)
    }, [])

// --------Đồ trang điểm -----------
  
const[makeUpList, setMakeUpList] = useState([])
useEffect(() => {
  //1. Load data từ server 
  const makeUp =[
    {
      image: <Image source={require('../images/slider/d1.jpeg')} style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
      nameProduct : 'Tên sản phẩm ',
      content: 'Mô tả sản phẩm '
    }, 
    {
      image: <Image source={require('../images/slider/d2.jpeg')}  style={{flex: 1 , width: '100%', height: 'auto'}}    ></Image>,
      nameProduct : 'Tên sản phẩm ',
      content: 'Mô tả sản phẩm '
    },
    {
      image: <Image source={require('../images/slider/d3.jpeg')}    style={{flex: 1 , width: '100%', height: 'auto'}}   ></Image>,
      nameProduct : 'Tên sản phẩm ',
      content: 'Mô tả sản phẩm '
    },
    {
      image: <Image source={require('../images/slider/d4.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
      nameProduct : 'Tên sản phẩm ',
      content: 'Mô tả sản phẩm '
    },
    {
      image: <Image source={require('../images/slider/d5.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
      nameProduct : 'Tên sản phẩm ',
      content: 'Mô tả sản phẩm '
    },
    {
      image: <Image source={require('../images/slider/d6.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
      nameProduct : 'Tên sản phẩm ',
      content: 'Mô tả sản phẩm '
    },
    {
      image: <Image source={require('../images/slider/d7.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
      nameProduct : 'Tên sản phẩm ',
      content: 'Mô tả sản phẩm '
    },
    {
      image: <Image source={require('../images/slider/d8.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
      nameProduct : 'Tên sản phẩm ',
      content: 'Mô tả sản phẩm '
    },
    {
      image: <Image source={require('../images/slider/d9.jpeg')}    style={{flex: 1 , width: '100%', height: 'auto'}}   ></Image>,
      nameProduct : 'Tên sản phẩm ',
      content: 'Mô tả sản phẩm '
    },
    {
      image: <Image source={require('../images/slider/d10.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
      nameProduct : 'Tên sản phẩm ',
      content: 'Mô tả sản phẩm '
    },
    {
      image: <Image source={require('../images/slider/d11.jpeg')}    style={{flex: 1 , width: '100%', height: 'auto'}}   ></Image>,
      nameProduct : 'Tên sản phẩm ',
      content: 'Mô tả sản phẩm '
    },
    {
      image: <Image source={require('../images/slider/d7.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
      nameProduct : 'Tên sản phẩm ',
      content: 'Mô tả sản phẩm '
    },
  
  ];

  //2. Cập nhật lên state của screen 
  setMakeUpList(makeUp)
}, [])

// --------Đồ váy nữ 1-----------
  
    const[dress1List, setDress1List] = useState([])
    useEffect(() => {
      //1. Load data từ server 
      const dress1 =[
        {
          image: <Image source={require('../images/slider/v8.jpeg')} style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
          nameProduct : 'Tên sản phẩm ',
          content: 'Mô tả sản phẩm '
        }, 
        {
          image: <Image source={require('../images/slider/v9.jpeg')}  style={{flex: 1 , width: '100%', height: 'auto'}}    ></Image>,
          nameProduct : 'Tên sản phẩm ',
          content: 'Mô tả sản phẩm '
        },
        {
          image: <Image source={require('../images/slider/v10.jpeg')}    style={{flex: 1 , width: '100%', height: 'auto'}}   ></Image>,
          nameProduct : 'Tên sản phẩm ',
          content: 'Mô tả sản phẩm '
        },
        {
          image: <Image source={require('../images/slider/v11.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
          nameProduct : 'Tên sản phẩm ',
          content: 'Mô tả sản phẩm '
        },
        {
          image: <Image source={require('../images/slider/v12.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
          nameProduct : 'Tên sản phẩm ',
          content: 'Mô tả sản phẩm '
        },
        {
          image: <Image source={require('../images/slider/v13.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
          nameProduct : 'Tên sản phẩm ',
          content: 'Mô tả sản phẩm '
        },
        {
          image: <Image source={require('../images/slider/v14.jpeg')}     style={{flex: 1 , width: '100%', height: 'auto'}}  ></Image>,
          nameProduct : 'Tên sản phẩm ',
          content: 'Mô tả sản phẩm '
        },
        {
          image: <Image source={require('../images/slider/v3.jpeg')}    style={{flex: 1 , width: '100%', height: 'auto'}}   ></Image>,
          nameProduct : 'Tên sản phẩm ',
          content: 'Mô tả sản phẩm '
        },
      ];
  
      //2. Cập nhật lên state của screen 
      setDress1List(dress1)
    }, [])



//-------Đồ Công nghệ -------

  const[techList, setTechList] = useState([])
  useEffect(() => {
    //1. Load data từ server 
    const tech =[
      {
        image: <Image source={require('../images/slider/m2.jpeg')} style={{flex: 1,resizeMode:'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      }, 
      {
        image: <Image source={require('../images/slider/m1.jpeg')}  style={{flex: 1 , resizeMode:'contain'}}    ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m3.jpeg')}    style={{flex: 1 , resizeMode:'contain'}}   ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m4.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m5.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m6.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m7.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m8.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m9.jpeg')}    style={{flex: 1 , resizeMode:'contain'}}   ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m10.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m11.jpeg')}    style={{flex: 1 , resizeMode:'contain'}}   ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m6.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
   
    ];

    //2. Cập nhật lên state của screen 
    setTechList(tech)
  }, [])

//-------Đồ Công nghệ -------

        const[tech2List, setTech2List] = useState([])
        useEffect(() => {
          //1. Load data từ server 
          const tech2 =[
            {
              image: <Image source={require('../images/slider/m12.jpeg')} style={{flex: 1,resizeMode:'contain'}}  ></Image>,
              nameProduct : 'Tên sản phẩm ',
              content: 'Mô tả sản phẩm '
            }, 
            {
              image: <Image source={require('../images/slider/m22.jpeg')}  style={{flex: 1 , resizeMode:'contain'}}    ></Image>,
              nameProduct : 'Tên sản phẩm ',
              content: 'Mô tả sản phẩm '
            },
            {
              image: <Image source={require('../images/slider/m13.jpeg')}    style={{flex: 1 , resizeMode:'contain'}}   ></Image>,
              nameProduct : 'Tên sản phẩm ',
              content: 'Mô tả sản phẩm '
            },
            {
              image: <Image source={require('../images/slider/m14.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
              nameProduct : 'Tên sản phẩm ',
              content: 'Mô tả sản phẩm '
            },
            {
              image: <Image source={require('../images/slider/m15.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
              nameProduct : 'Tên sản phẩm ',
              content: 'Mô tả sản phẩm '
            },
            {
              image: <Image source={require('../images/slider/m16.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
              nameProduct : 'Tên sản phẩm ',
              content: 'Mô tả sản phẩm '
            },
            {
              image: <Image source={require('../images/slider/m17.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
              nameProduct : 'Tên sản phẩm ',
              content: 'Mô tả sản phẩm '
            },
            {
              image: <Image source={require('../images/slider/m18.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
              nameProduct : 'Tên sản phẩm ',
              content: 'Mô tả sản phẩm '
            },
            {
              image: <Image source={require('../images/slider/m19.jpeg')}    style={{flex: 1 , resizeMode:'contain'}}   ></Image>,
              nameProduct : 'Tên sản phẩm ',
              content: 'Mô tả sản phẩm '
            },
            {
              image: <Image source={require('../images/slider/m21.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
              nameProduct : 'Tên sản phẩm ',
              content: 'Mô tả sản phẩm '
            },
            {
              image: <Image source={require('../images/slider/m20.jpeg')}    style={{flex: 1 , resizeMode:'contain'}}   ></Image>,
              nameProduct : 'Tên sản phẩm ',
              content: 'Mô tả sản phẩm '
            },
            {
              image: <Image source={require('../images/slider/m22.jpeg')}  style={{flex: 1 , resizeMode:'contain'}}    ></Image>,
              nameProduct : 'Tên sản phẩm ',
              content: 'Mô tả sản phẩm '
            },
         
          ];
      
          //2. Cập nhật lên state của screen 
          setTech2List(tech2)
        }, [])

//-------Đồ Công nghệ3 -------

  const[tech3List, setTech3List] = useState([])
  useEffect(() => {
    //1. Load data từ server 
    const tech3 =[
      {
        image: <Image source={require('../images/slider/m23.jpeg')} style={{flex: 1,resizeMode:'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      }, 
      {
        image: <Image source={require('../images/slider/m33.jpeg')}  style={{flex: 1 , resizeMode:'contain'}}    ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m32.jpeg')}    style={{flex: 1 , resizeMode:'contain'}}   ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m24.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m25.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m2.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m27.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m28.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m29.jpeg')}    style={{flex: 1 , resizeMode:'contain'}}   ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m30.jpeg')}     style={{flex: 1 , resizeMode:'contain'}}  ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m31.jpeg')}    style={{flex: 1 , resizeMode:'contain'}}   ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
      {
        image: <Image source={require('../images/slider/m33.jpeg')}  style={{flex: 1 , resizeMode:'contain'}}    ></Image>,
        nameProduct : 'Tên sản phẩm ',
        content: 'Mô tả sản phẩm '
      },
   
    ];

    //2. Cập nhật lên state của screen 
    setTech3List(tech3)
  }, [])

// ------Để cho hình ảnh chạy tự động khi làm banner--------
    useEffect(() => {
      if(imageList.length >0){
      let index =0;
      setInterval(()=>{
        stepCarousel.current.scrollTo({x: index * screenWidth/2 , y: 0, animated: true})
      index+=1
      if(index  === Math.floor(imageList.length)){
        index =0
      }
      }, 1000)
        }
      }, [imageList])  // Khi mà imageList được set lên rồi thì sẽ được lắng nghe 

// ------- Hàm lấy index của bức ảnh ----------------------     
      const handleScroll =(e ) => {
        if(!e){
          return ;
        }
        const {argNativeEvent } = e;
        if (argNativeEvent && argNativeEvent.contentOffset) {
          const currentOffset = argNativeEvent.contentOffset.x    // Đây chỉ lấy trục x vì chỉ scroll theo trục x
        let imageIndex = 0;
        if (argNativeEvent.contentOffset.x >0){
          imageIndex = Math.floor((argNativeEvent.contentOffset.x + screenWidth /4 )/ screenWidth/2 );
        }
  setCurrentImage(imageIndex)
  }

}


//-------------Render lại kết quả của thân hàm ------------
  return (
        <View style ={{flex:1}}>
    <SafeAreaView style= {{flex: 1}} >

{/**  -------------2 phím Back và setting ở trên header ---------*/}

        <View style= {{ height : '5%' , width: '100%' , borderBottomWidth: 2 , borderColor: '#FFC0CB', flexDirection: 'row', justifyContent: 'space-between'}} >
           
            {/** Phím back  */}
            <TouchableOpacity style= {{ width: '10%' , height: '100%'}}
             onPress={ () => {
                navigation.goBack()  // Trở về 1 trang trước đó
              }}
            >
                <Image source={require('../images/back2.png')} style={{ width: '100%' , height: '100%' , resizeMode:'contain'}}/>
            </TouchableOpacity>

            {/** Phím setting  */}          
            <TouchableOpacity  style= {{ width: '10%' , height: '100%'}}
             onPress={ () => {
                navigation.navigate('Setting')
              }}
            >
                <Image source={require('../images/setting1.png')} style={{ width: '100%' , height: '100%' , resizeMode:'contain'}}/>
            </TouchableOpacity>
        </View>
{/**  -------------Load dữ liệu lên trên màn hình ---------*/}
{/** Hàng 1 */}
       <ScrollView>  
              {/** Phàn hình ảnh trong scrollView ngang  */}
        <View  style={{width: screenWidth, height: screenWidth/2  }}>
            <ScrollView
            horizontal // Để cho nó cuộn ngang
            contentContainerStyle = {{width : screenWidth * imageList.length /2 , height: screenWidth/2   }} // Định dạng nội dung bên trong nó 
            pagingEnabled   // Để cho màn hình khi scroll thì nằm gọn ở bức hình nào đấy 
            scrollEventThrottle={16}   // Để kho scroll nó k bị giật tham số mặc định là 16
            onScroll={handleScroll}
            ref= {stepCarousel}    // Dùng thư viện của react là useRef khai báo tên cho cái scrollView này  dưới tên là step_Carousel dùng cái biến này làm gì đấy bên ngoài hàm phạm vi biến 
            >
              {imageList.map((argEach , index )=> {
                return (
                  <View style={{flex: 1}}>

                <View key={index.toString()}
                style={{width:  screenWidth/2 , height: screenWidth/2   ,padding: 3, justifyContent: 'center' , alignItems: 'center' }}
                >  
                {argEach.image} 
                  </View>
                </View>            
                )
              })}
            </ScrollView>
        {/** Phần hiển thị thông tin ra màn hình  */}
        <View  style={{width: screenWidth, height: 30}}>
              <Text>Index: {currentImage} </Text>
              {/* <Text>Index: {imageList[currentImage].nameProduct} </Text> */}
        </View>

        </View>




{/** Hàng 2 */}
        <View  style={{width: screenWidth, height: screenWidth/2, marginTop: 2}}>
            <ScrollView
            horizontal // Để cho nó cuộn ngang
            contentContainerStyle = {{width : screenWidth * imageList.length /2  , height: screenWidth/2}} // Định dạng nội dung bên trong nó 
            pagingEnabled
            >
              {femaleList.map((argEach , index )=> {
                return (
                <View key={index.toString()}
                style={{width: screenWidth/2 ,height:screenWidth/2 ,padding: 3, justifyContent: 'center' , alignItems: 'center'}}
                >  
                  {argEach.image}
                </View>
                )
              })}
            </ScrollView>
        </View>

{/** Hàng 3 */}
<View  style={{width: screenWidth, height: screenWidth/2, marginTop: 2}}>
            <ScrollView
            horizontal // Để cho nó cuộn ngang
            contentContainerStyle = {{width : screenWidth * imageList.length /2  , height: screenWidth/2}} // Định dạng nội dung bên trong nó 
            pagingEnabled  
            >
              {maleList.map((argEach , index )=> {
                return (
                <View key={index.toString()}
                style={{width: screenWidth/2 ,height:screenWidth/2 ,padding: 3, justifyContent: 'center' , alignItems: 'center'}}
                >  
                  {argEach.image}
                </View>
                )
              })}
            </ScrollView>
        </View>

{/** Hàng 4 */}
<View  style={{width: screenWidth, height: screenWidth/2}}>
            <ScrollView
            horizontal // Để cho nó cuộn ngang
            contentContainerStyle = {{width : screenWidth * imageList.length /2  ,height: screenWidth/2}} // Định dạng nội dung bên trong nó         
            pagingEnabled  
           >

              {dressList.map((argEach , index )=> {
                return (
                <View key={index.toString()}
                style={{width:  screenWidth/2  ,height:screenWidth/2,padding: 3, justifyContent: 'center' , alignItems: 'center' }}
                >  
                  {argEach.image}
                </View>
                )
              })}
            </ScrollView>
        </View>

{/** Hàng 5 */}
<View  style={{width: screenWidth, height: screenWidth/2}}>
            <ScrollView
            horizontal // Để cho nó cuộn ngang
            contentContainerStyle = {{width : screenWidth * imageList.length /2  ,height: screenWidth/2}} // Định dạng nội dung bên trong nó 
            pagingEnabled  
            >
              {makeUpList.map((argEach , index )=> {
                return (
                <View key={index.toString()}
                style={{width:  screenWidth/2  ,height:screenWidth/2,padding: 3, justifyContent: 'center' , alignItems: 'center' }}
                >  
                  {argEach.image}
                </View>
                )
              })}
            </ScrollView>
        </View>


{/** Hàng 6 */}
<View  style={{width: screenWidth, height: screenWidth/2}}>
            <ScrollView
            horizontal // Để cho nó cuộn ngang
            contentContainerStyle = {{width : screenWidth * imageList.length /2  ,height: screenWidth/2}} // Định dạng nội dung bên trong nó         
            pagingEnabled  
            >
              {dress1List.map((argEach , index )=> {
                return (
                <View key={index.toString()}
                style={{width:  screenWidth/2  ,height:screenWidth/2,padding: 3, justifyContent: 'center' , alignItems: 'center' }}
                >  
                  {argEach.image}
                </View>
                )
              })}
            </ScrollView>
        </View>




{/** Hàng 7 */}
<View  style={{width: screenWidth, height: screenWidth/2, marginTop: 2}}>
            <ScrollView
            horizontal // Để cho nó cuộn ngang
            contentContainerStyle = {{width : screenWidth * imageList.length /2  , height: screenWidth/2}} // Định dạng nội dung bên trong nó   
            pagingEnabled  
            >

              {techList.map((argEach , index )=> {
                return (
                <View key={index.toString()}
                style={{width: screenWidth/2 ,height:screenWidth/2 ,padding: 3, justifyContent: 'center' , alignItems: 'center'}}
                >  
                  {argEach.image}
                </View>
                )
              })}
            </ScrollView>
        </View>

{/** Hàng 8 */}


<View  style={{width: screenWidth, height: screenWidth/2}}>
    <ScrollView
    horizontal // Để cho nó cuộn ngang
    contentContainerStyle = {{width : screenWidth * imageList.length /2  ,height: screenWidth/2}} // Định dạng nội dung bên trong nó 
    pagingEnabled  
    >
      {tech2List.map((argEach , index )=> {
        return (
        <View key={index.toString()}
        style={{width:  screenWidth/2  ,height:screenWidth/2 ,padding: 3, justifyContent: 'center' , alignItems: 'center' }}
        >  
          {argEach.image}
        </View>
        )
      })}
    </ScrollView>
</View>


{/** Hàng 9 */}
 

<View  style={{width: screenWidth, height: screenWidth/2}}>
    <ScrollView
    horizontal // Để cho nó cuộn ngang
    contentContainerStyle = {{width : screenWidth * imageList.length /2 +imageList.length /2 *6 ,height: screenWidth/2}} // Định dạng nội dung bên trong nó 
    pagingEnabled  
    >
      {tech3List.map((argEach , index )=> {
        return (
        <View key={index.toString()}
        style={{width:  screenWidth/2  ,height:screenWidth/2 ,padding: 3, justifyContent: 'center' , alignItems: 'center' }}
        >  
          {argEach.image}
        </View>
        )
      })}
    </ScrollView>
</View>

{/** Hàng 10 */}
<View  style={{width: screenWidth, height: screenWidth/2+ 40, marginTop: 2}}>
            <ScrollView
            horizontal // Để cho nó cuộn ngang
            contentContainerStyle = {{width : screenWidth * imageList.length /2  , height: screenWidth/2 + 20}} // Định dạng nội dung bên trong nó 
            pagingEnabled
            >
              {imageList.map((argEach , index )=> {
                return (
                <View key={index.toString()}
                style={{width: screenWidth/2 ,height:screenWidth/2 +20 ,padding: 3, justifyContent: 'center' , alignItems: 'center'}}
                >  
             
                  {argEach.image}
              

                  
                  {argEach.nameProduct}
        

                  {argEach.content}
           
                  
                </View>
                )
              })}
            </ScrollView>
        </View>

{/** End hàng  */}
    </ScrollView>             
    </SafeAreaView>
        </View>


        
  )
}

const styles = StyleSheet.create({})