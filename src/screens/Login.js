import { StyleSheet, Text, View,Image } from 'react-native';
import React,{useState} from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import CheckBox from 'react-native-check-box';


const Login = ({navigation}) => {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);

  };

  const forgotpassNavi=()=>{
         console.log("forgotpassword")
       navigation.navigate('ForgotPassword')
    }

    const Signup =()=>{
      console.log("signup")
    navigation.navigate('Signup')
 }

 const profile =()=>{
 
navigation.navigate('Profile')
}

  return (
    <View style={{backgroundColor:'#FFFFFF', flex:1}}>
       
       <Image source={require('../Assets/img/newlogo.png')}

        style={{width:131,height:32,alignSelf:'center',top:'3%',marginLeft:'5%'}}
       /> 
   
   
   <View style={{flexDirection:'row'}}>
   <Image source={require('../Assets/img/newdoc.png')}
    style={{width:264,height:370,marginTop:8,marginLeft:-23}}
   />
    <Image source={require('../Assets/img/mak.png')}
      style={{width:120,height:120,marginTop:'18%',left:'-6%'}}
    />
  <Image source={require('../Assets/img/newcircle.png')}
    style={{alignSelf:'flex-end',left:'-20%',width:55,height:55,top:'-20%'}}
   />
 
  </View>
  <View>
    <Image source={require('../Assets/img/newcircle.png')}
      style={{width:22,height:22,marginLeft:235,top:-25}}
    />
  </View>
  
    <View style={{marginTop:'-1%'}}>
      
    
  
   
    
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
         
          <Image
            source={require('../Assets/img/smartphone.png')}
            style={{ width: 20, height: 20, marginLeft: '10%' }}
          />
         
          
          <TextInput  style={{left:'5%',width:"75%"}}
            placeholder="Mobile Number"
            placeholderTextColor={'#000000'}
            underlineColorAndroid='#B8094C'
            // style={{ width: '83%', marginLeft: '-8%' }}
          />
        
         
        </View>
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../Assets/img/padlock.png')}
          style={{width:20, height:24,marginLeft:39}}
        />
       <TextInput style={{left:'15%',width:"75%"}} 
       placeholder='Password'
       placeholderTextColor={'#000000'}
       underlineColorAndroid='#B8094C'
       secureTextEntry={true}/>
 </View>
   </View>

    <View style={{flexDirection:'row'}}>
     <View style={{ flex: 1}}>
     
     <CheckBox style={{marginLeft:'18%'}}
          checkBoxColor="#BF6F8A" 
          isChecked={isChecked}
          onClick={handleCheck}
         rightText="Remember Me"
         rightTextStyle={{ color: '#B8094C' }} 
     /></View>

      <View> 
        <TouchableOpacity onPress={forgotpassNavi}>

          <Text style={{color:'#B8094C',marginLeft:'11%'}}>ForgotPassword ?</Text>
        </TouchableOpacity>  
          
     </View>
    </View>
  
    <View>
 <TouchableOpacity  onPress={profile}>
  <Text style={styles.log}>Login</Text>
 </TouchableOpacity>
 </View>
 
 <View>
  <Text style={styles.loginwith}>or login with</Text>
   </View>
 
 <View style={{flexDirection:'row',alignSelf:'center',marginLeft:27,bottom:-12}}>
 <Image source={require('../Assets/img/googleimg.png')}
  style={{height:29,width:29,marginRight:15}}
 />
  <Image source={require('../Assets/img/facebook.png')}
    style={{height:29,width:29,marginRight:13}}
  />

 </View>
 
 <View>
  <Image source={require('../Assets/img/signup2.png')}
    style={styles.semicircle}
  />
 </View>
 
 <View style={{flexDirection:'row',bottom:130,marginLeft:80}}> 
 <Text style={{marginRight:4,fontWeight:'800',color:'black'}}>Don't have an account?</Text>
 <TouchableOpacity onPress={Signup}>
 <Text style={{color:'#B8094C'}}>Signup Now</Text>
 </TouchableOpacity>
 
 </View>
 
  </View>
  
  
   
   
   
   
   


  )
};

export default Login

const styles = StyleSheet.create({

  log:{
  alignSelf:'center',
  top:'70%',
  marginLeft:'5%',
  borderWidth:1,
    borderColor:"white",
     color:'white',
     paddingVertical: 6,
     paddingHorizontal:40,
     backgroundColor:'#D85788',
     borderRadius:10,
     fontSize:15,
     
},
loginwith:{
  
  marginLeft:'41%',
  marginTop:'7%',
  fontSize:15,
  fontWeight:'800',
  color:'black'
},
  
semicircle:{

  height:150,
  width:137,
  marginLeft:235,
  top:-60
  

}

  }
  
)













































