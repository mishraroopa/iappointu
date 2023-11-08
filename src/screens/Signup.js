import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const Signup = ({navigation}) => {

  const account=()=>{
    console.log("Login")
  navigation.navigate('Login')

 
  }
    
  return (
   
<View style={{backgroundColor:'white'}} >
<TouchableOpacity onPress={account}>
<Image source={require('../Assets/img/newlogo.png')}
    style={{width:131,height:32,alignSelf:'center',top:'62%',marginLeft:'5%'}}
/>
</TouchableOpacity>
<View>
<Image source={require('../Assets/img/avator.png')}
style={{width:145,height:145,marginTop:'10%',marginLeft:'32%'}}
  
/>
</View>
<View>

<Image source={require('../Assets/img/signup8.png')}
  style={{width:60,height:120,top:-150}}
/>
</View>
<View  style={{alignSelf:'center',marginTop:-120}}>
 
 <Text style={{fontSize:25, color:'#D6708B'}}>Create your account</Text>
 </View>  
   
   <View style={styles.background}>
    <View style={{flexDirection:'row',gap:4}}>
<Image source={require('../Assets/img/user2.png')}
  style={{width:24, height:25,marginLeft:35,top:47}}
/>

    <TextInput 
    placeholder='Full Name'
    placeholderTextColor={'#FFFFFF'}
     underlineColorAndroid='#F1B4BB'
    style={{width:'70%',alignSelf:'center',marginTop:30}} />
    </View>
    
    <View style={{flexDirection:'row',gap:6}}>
       <Image source ={require('../Assets/img/whitephone.png')}
        style={{width:24, height:25,marginLeft:32,top:20}}
       
      /> 
      <TextInput 
    placeholder='Mobile No.'
    placeholderTextColor={'#FFFFFF'}
     underlineColorAndroid='#F1B4BB'
    style={{width:'70%',alignSelf:'center',marginTop:4}} />
    </View>
     
    <View style={{flexDirection:'row',gap:6}}>
      <Text style={{fontSize:25,color:'white',marginLeft:'9%',top:'3%'}}>@</Text>
      <TextInput 
    placeholder='Email Address.'
    placeholderTextColor={'#FFFFFF'}
     underlineColorAndroid='#F1B4BB'
    style={{width:'70%',alignSelf:'center',marginTop:4}} />
     </View>
    
    <View style={{flexDirection:'row',gap:4}}>
      <Image source ={require('../Assets/img/whitelock.png')}
        style={{width:26, height:25,marginLeft:30,bottom:-16}}
      />
      <TextInput 
    placeholder='Password'
    placeholderTextColor={'#FFFFFF'}
     underlineColorAndroid='#F1B4BB'
    style={{width:'70%',alignSelf:'center',marginTop:4}} />

    </View>
     
     <View style={styles.start}>
    <TouchableOpacity>
      <Text style={{color:'white'}}>Get Started</Text>
    </TouchableOpacity>

     </View>
     
     <TouchableOpacity style={{alignSelf:"center",marginTop:20,zIndex:9999}} onPress={account}>
      <Text style={{color:'white',fontSize:15}} >Already have account? Login</Text>
     </TouchableOpacity>



    <View >
      <Image source={require('../Assets/img/signup2.png')}
      style={{width:150,height:160,bottom:'50%',marginLeft:'59%'}}
      />
    </View> 
     
   
    
    </View> 


 </View>
  )
}

export default Signup

const styles = StyleSheet.create({

background:{

    backgroundColor:'#D6708B',
    height:'120%',
    width:'100%',
    marginTop:'20%',
    borderTopRightRadius:55,
    borderTopLeftRadius:55,
    shadowOffset: {width:10 , height: 30},  
    shadowColor: 'black',  
    shadowOpacity: 500,  
    shadowBlur: 1.00,  
    shadowRadius: 20.00,  
    shadowColor:"black",
    
    elevation:50,
},

start:{

  width:100,
  alignSelf:'center',
  marginTop:'10%',
  backgroundColor:'#F1B4BB',
  borderRadius:10,
  paddingVertical: 6,
  paddingHorizontal:10,
  borderWidth:1,
  borderColor:'black'

  
}

})