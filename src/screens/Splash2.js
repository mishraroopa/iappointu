import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Splash2 = ({navigation}) => {

 const log=() => {
   navigation.navigate('Login')
 }
  
  const Splash3=()=>{

     navigation.navigate('Splash3')

}
  return (
    <View style={{backgroundColor:'#D6708B',flex:1}}>

    <TouchableOpacity onPress={log}>
      <Image source={require('../Assets/img/newlogo.png')}
        style={{width:131,height:32,alignSelf:'center',marginTop:'5%'}}
      />
    </TouchableOpacity>




  {/* <TouchableOpacity onPress={account}>
      <Image source={require('../Assets/img/newlogo.png')}
            style={{width:131,height:32,alignSelf:'center',top:'90%',marginLeft:'1%'}}/>
            </TouchableOpacity>
         */}
       
        <View>
          <Image source={require('../Assets/img/ladydoc2.png')}

            style={{width:'110%',height:'110%',top:-170,right:28}}
          />
        </View>


    <View style={styles.background}>
<View>
  <Image source={require('../Assets/img/doc3.png')}
    style={{width:250,height:250,alignSelf:'center',marginTop:20}}
  />
</View>
   <TouchableOpacity onPress={Splash3}>
        <Image source={require('../Assets/img/icon.png')}
          style={{width:50,height:50,alignSelf:'center',marginTop:20}}
        />
            
    </TouchableOpacity>
   
   
    </View>
    
    
    </View>
  )
}

export default Splash2

const styles = StyleSheet.create({

  background:{

    backgroundColor:'#ffb4bc',
    height:'52%',
    width:'100%',
    marginTop:-487
  }
})