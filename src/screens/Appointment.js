import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Appointment = () => {
  return (
    <View style={{backgroundColor: '#D6D6D8', flex: 1}}>
    <View style={[styles.background]}>
      <View style={{marginLeft: 25, marginTop: 12}}>
        <Image
          source={require('../Assets/img/wave.png')}
          style={{
            height: '20%',
            width: '5%',
            marginLeft: '11%',
            top: '20%',
          }}
        />
        <Text style={{color: 'white'}}>Hello</Text>

        <Text
          style={{
            fontFamily: 'Poppins-Light',
            fontSize: 25,
            fontWeight: '800',
            bottom: '8%',
            color: 'white',
          }}>
          Emanuel Wilfred
        </Text>
        <Text
          style={{
            fontSize: 10,
            bottom: '10%',
            marginLeft: '1%',
            color: 'white',
          }}>
          emanuelwilfred@gmail.com
        </Text>
      </View>

      <Image
        source={require('../Assets/img/vital5.png')}
        style={{width: '17%', height: '60%', marginLeft: '75%', top: '-59%'}}
      />
    </View>
    <View style={{flexDirection:'row',bottom:'13%',padding:30}}>
        <View style={{flexDirection:'column',gap:60}}>
      <Text style={{color:'black',top:50,fontSize:20,fontFamily:'helvetica-light-587ebe5a59211'}}> Dr. Adrian {'\n'} Segara</Text>
      <Text style={{color:'black'}} > Heart Surgeon</Text>
       </View>
       
        <Image source={require('../Assets/img/doctormen.png')}
            style={{width:'55%',height:'200%',marginTop:'10%',marginLeft:'17%'}}
        />
    </View>

   <View>
    <View style={styles.footer}></View>
    
    
   
     
     
     <View style={styles.card1}></View>
    
    
     <View style={styles.card2}>
      <View style={styles.card3}>
      
      <View style={styles.card4}>
        
      </View></View>
  </View>
   </View>


</View>
  )
}

export default Appointment

const styles = StyleSheet.create({

    background: {
        width: '100%',
        height: '15%',
        backgroundColor: '#D6708B',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
       
    },
    footer:{
        width:'100%',
        height:'109%',
        backgroundColor:'white',
        marginTop:'14%',
        borderTopLeftRadius:80,
        borderTopRightRadius:80,
        


    },
    card2:{
     position:'absolute',
     height:100,
     width:370,
      backgroundColor:'#399299',
      marginTop:'90%',
      marginLeft:'0%',
    
    },

    card1:{
        position:'absolute',
        height:170,
        width:360,
         backgroundColor:'#399299',
         marginTop:'50%',
        borderTopLeftRadius:80,
        borderTopRightRadius:80,
       
    },
    card3:{
     width:90,
     height:60,
     backgroundColor:'#399299',
     borderTopLeftRadius:40,
  borderTopRightRadius:40,
     alignSelf:'center',
     bottom:165,
     borderWidth:1,

    },
    
})