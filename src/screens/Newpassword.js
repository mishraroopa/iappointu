import { StyleSheet, Text, View,Image, Vibration} from 'react-native'
import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

const Newpassword = ({navigation}) => {

  const account=() => {
   
      navigation.navigate('Login')
    }
  
    return (
    <View style={{backgroundColor:'#FFFFFF',flex:1}}>
      
      <View style={styles.background}>
        
        <View>
      <TouchableOpacity onPress={account}>
     <Image source ={require('../Assets/img/newlogo.png')}
      style={{width:131,height:32,alignSelf:'center',top:'50%',marginLeft:'5%'}}
      />
     </TouchableOpacity>
    </View>
     
    <View>
       <Image source={require('../Assets/img/whitecircle.png')} 
    style={styles.circle}
     />
     </View>
     
      <View>
            <Image source={require('../Assets/img/avator.png')}
     
             style={{width:140,height:140,alignSelf:'center',bottom:'22%',marginLeft:'5%'}}
         />
          
    </View>     
              
    <View style={{alignSelf:'center',position:'absolute',top:250}}>

    <Text style={{fontSize:20,color:'white',marginLeft:'5%'}}>New Password</Text>
   </View>
   </View>
    
    <View>
    <View style={{marginTop:'15%'}}>
      
    
  
   
    
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                 
              <Image
                    source={require('../Assets/img/padlock.png')}
                  style={{ width: 30, height: 30, marginLeft: '10%' }}
                  />
                 
                  
                  <TextInput  style={{left:'5%',width:"75%"}}
                    placeholder="New Password"
                    placeholderTextColor={'#B8094C'}
                     underlineColorAndroid='#B8094C'
                    secureTextEntry={true}
      
                   
                   />
                
                 
                </View>
                
                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                 <Image source={require('../Assets/img/padlock.png')}
                   style={{width:24, height:28,marginLeft:40}}
                 />
                <TextInput style={{left:'15%',width:"75%"}} 
                placeholder='Re-enter Password'
                placeholderTextColor={'#B8094C'}
               underlineColorAndroid='#B8094C'
             secureTextEntry={true}/>
          </View>
          </View>
         <View style={styles.save}>
        <TouchableOpacity>
        <Text style={{textAlign:'center',color:'white',fontSize:17}}>Save</Text>
        </TouchableOpacity>
        </View>
    </View>
    
    <View>
    <Image source={require('../Assets/img/signup2.png')}
      style={{width:112,height:119,marginLeft:249
      }}
    />
  </View>
    
   
    
    
    </View>
  )
}

export default Newpassword

const styles = StyleSheet.create({

background:{
  backgroundColor:'#D6708B',
    height:'55%',
   width:'100%',
   borderBottomLeftRadius:50,
  borderBottomRightRadius:50,
   shadowOffset: {width:10 , height: 30},  
    shadowColor: 'black',  
     shadowOpacity: 500,  
      shadowBlur: 1.00,  
     shadowRadius: 13.00,  
      shadowColor:"black",
      
      elevation:20,
},
circle:{

      width:40,
      height:40,
      right:'-10%',
      marginTop:"10%"
   },
  save:{
    
  
  width:'25%',
  alignSelf:'center',
  marginTop:'10%',
  backgroundColor:'#D6708B',
  borderRadius:10,
  paddingVertical: 6,
  paddingHorizontal:10,
  marginLeft:'4%'
  },
    
   
  
})
























































// import { StyleSheet, Text, View,Image, } from 'react-native'
// import React from 'react'
// import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

// const Newpassword = ({navigation}) => {

//   const account=()=>{
   
//   navigation.navigate('Login')
// }
//   return (



  
// }
// //     <View style={styles.background}>
    
    
// //     <View style={}
     
     
     
// //      <TouchableOpacity onPress={account}>
// //      <Image source ={require('../Assets/img/newlogo.png')}
// //         style={{width:131,height:32,alignSelf:'center',top:'50%'}}
// //      />
// //      </TouchableOpacity>
    
// //      <View>
// //         <Image source={require('../Assets/img/whitecircle.png')} 
// //         style={styles.circle}
// //         />
// //      </View>
    
//      <View>
     
//      <Image source={require('../Assets/img/avator.png')}

//         style={{width:125,height:125,alignSelf:'center',top:'-20%'}}
//      />
     
//    </View>
//    <View style={{alignSelf:'center'}}>

//     <Text style={{fontSize:20,color:'white'}}>New Password</Text>
//    </View>
   
   
   
   
//    </View>
   
//    <View style={{marginTop:'48%'}}>
      
    
  
   
    
//       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
           
//             <Image
//               source={require('../Assets/img/padlock.png')}
//               style={{ width: 30, height: 30, marginLeft: '10%' }}
//             />
           
            
//             <TextInput  style={{left:'5%',width:"75%"}}
//               placeholder="New Password"
//               placeholderTextColor={'#B8094C'}
//               underlineColorAndroid='#B8094C'
//               secureTextEntry={true}

             
//             />
          
           
//           </View>
          
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <Image source={require('../Assets/img/padlock.png')}
//             style={{width:24, height:28,marginLeft:40}}
//           />
//          <TextInput style={{left:'15%',width:"75%"}} 
//          placeholder='Re-enter Password'
//          placeholderTextColor={'#B8094C'}
//          underlineColorAndroid='#B8094C'
//          secureTextEntry={true}/>
//    </View>
//     </View>
//    <View style={styles.save}>
//  <TouchableOpacity>
//   <Text style={{textAlign:'center',color:'white',fontSize:17}}>Save</Text>
//  </TouchableOpacity>
//  </View>
  
//  <View>
//     <Image source={require('../Assets/img/recoveredimg.png')}
//     style={{width:'36%',height:'36%',bottom:4,marginLeft:260}}
//     />
 
//    </View> 
  
 

    
     

 
   
   
   
   
//   )
// }

// export default Newpassword

// const styles = StyleSheet.create({

// background:{

//       backgroundColor:'#FFFFFF'
// },


//   //     backgroundColor:'#D6708B',
// //     height:'55%',
// //     width:'100%',
// //      borderBottomLeftRadius:50,
// //      borderBottomRightRadius:50,
// //     shadowOffset: {width:10 , height: 30},  
// //     shadowColor: 'black',  
// //     shadowOpacity: 500,  
// //     shadowBlur: 1.00,  
// //     shadowRadius: 20.00,  
// //     shadowColor:"black",
    
// //     elevation:50,

 

// circle:{

//     width:40,
//     height:40,
//     right:'-10%',
//     marginTop:"10%"
// },

// save:{
    
  
//   width:'25%',
//   alignSelf:'center',
//   marginTop:'10%',
//   backgroundColor:'#D6708B',
//   borderRadius:10,
//   paddingVertical: 6,
//   paddingHorizontal:10,
  
    
   
    
// }

// })
