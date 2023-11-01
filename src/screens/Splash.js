import { StyleSheet, Text, View,Image, Pressable,TouchableOpacity } from 'react-native'
import React from 'react'


const Splash = ({navigation}) => {

    const account=() => {
        console.log("Login")
      navigation.navigate('Login')
   }
   const splash=()=>{
  
  navigation.navigate('Splash2')
   }

  return (
    <View style={{backgroundColor:'#F1B4BB',flex:1}}>
      
        <TouchableOpacity onPress={account} >
        <Image source={require('../Assets/img/newlogo.png')}
            style={{width:131,height:32,alignSelf:'center',top:'50%',marginLeft:'1%'}}/>
        </TouchableOpacity>
        <View style={{marginTop:30}}>
            <Text style={{fontFamily:'Poppins-SemiBold',fontSize:14,textAlign:'center',fontWeight:'800',color:'black'}}> A Simple Convenient and User Friendly</Text>
          <Text style={{fontFamily:'Poppins-SemiBold',textAlign:'center',fontWeight:'800',fontSize:14,color:'black'}}>way to book appointment for</Text>
          <Text style={{fontFamily:'Poppins-SemiBold',textAlign:'center',fontWeight:'800',fontSize:14,color:'black'}}>all your Healthcare needs</Text>
        </View>
      <View>
        <Image source={require('../Assets/img/left.png')}
            style={{width:'32%', height:'79%',marginLeft:'-3%',top:'5%'}}
        />
      </View>


      <View>
        <Image source={require('../Assets/img/doctorji.png')}
           style={{width:'58%',height:'70%',top:'-87%',marginLeft:'23%'}}
        />
      </View>
      
    <View>
        <Image source={require('../Assets/img/rightsplash.png')}
            style={{width:'35%',height:'78%' ,marginLeft:'73%',top:'-199%'}}
        />
    
    
    </View>
    <Image source={require('../Assets/img/icon.png')}
        style={{width:'12%',height:'6%',marginTop:'-309%',alignSelf:'center'}}
       />
    
   
     
    
     
    
    
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})