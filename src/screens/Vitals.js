import { Image, StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const Vitals = () => {


  return (
   <View style={{backgroundColor:'#ffffff',flex:1}}>
   <View style={styles.background}>
    <View style={{marginLeft:25,marginTop:12}}>
   <Image source={require('../Assets/img/wave.png')}
   style={{height:'20%',width:'5%',marginLeft:'11%',bottom:'-20%'}}
   />
    <Text style={{color:'white'}} >Hello</Text>
    
    <Text style={{fontFamily:'Poppins-Light',fontSize:25,fontWeight:'800',top:'-8%',color:'white'}}>Emanuel Wilfred</Text>
    <Text style={{fontSize:10,top:'-10%',marginLeft:'1%',color:'white'}}>emanuelwilfred@gmail.com</Text>
    </View>
    
    <Image source={require('../Assets/img/vital5.png')}
        style={{width:'17%',height:'54%',marginLeft:'75%',top:'-59%'}}
    />
  </View>
 
 <View style={{marginTop:5}}>
    <Text style={styles.text}>Vitals</Text>
 </View>
 <View>
    <Text style={styles.detail}>Basic Details:</Text>
 </View>
 

 <View style={styles.container}> 
  
 
    
    
  
  <Image source={require('../Assets/img/age.png')}
      style={{width:25,height:25,marginTop:'-6%'}}/>
   <Text style={styles.age}>Age(in year):</Text>
   <Text style={styles.update}>Last Updated on</Text>
   <Text style={styles.number}>25</Text>
   <Text style={{marginLeft:'80%',top:'-60%',fontSize:10}}>16/10/23</Text>
  

  <View style={[styles.underline]} /> 

</View>

<View style={[styles.container2]}> 
  
 
    
    
  
  <Image source={require('../Assets/img/height.png')}
      style={{width:25,height:25,marginTop:'-6%'}}/>
   <Text style={styles.age}>Height(in CM):</Text>
   <Text style={styles.update}>Last Updated on</Text>
   <Text style={styles.number}>155</Text>
   <Text style={{marginLeft:'80%',top:'-60%',fontSize:10}}>16/10/23</Text>
  

  <View style={[styles.underline]} /> 

</View>
   
   <View style={[styles.container3]}> 
  
 
    
    
 
  <Image source={require('../Assets/img/weight-scale.png')}
      style={{width:25,height:25,marginTop:'-6%'}}/>
   <Text style={styles.age}>Weight(in KG):</Text>
   <Text style={styles.update}>Last Updated on</Text>
   <Text style={styles.number}>95</Text>
   <Text style={{marginLeft:'80%',top:'-60%',fontSize:10}}>16/10/23</Text>
  

  <View style={[styles.underline]} /> 

</View>
   <View>
    <Text style={styles.temp}>Temperature:</Text>
   </View>

   <View style={[styles.container4]}> 
  
 
    
    
  
  <Image source={require('../Assets/img/temp.png')}
      style={{width:25,height:25,marginTop:'-6%'}}/>
   <Text style={styles.age}>Oral(Mouth):</Text>
   <Text style={styles.update}>Last Updated on</Text>
   <Text style={styles.number}>66</Text>
   <Text style={{marginLeft:'80%',top:'-60%',fontSize:10}}>16/10/23</Text>
  

  <View style={[styles.underline]} /> 

</View>

<View>
  <Text style={styles.pulse}>Pulse:</Text>
</View>

<View style={[styles.container5]}> 
  
 
    
    
 
  <Image source={require('../Assets/img/lifeline.png')}
      style={{width:25,height:25,marginTop:'-6%'}}/>
   <Text style={styles.age}>Radial(Arm):</Text>
   <Text style={styles.update}>Last Updated on</Text>
   <Text style={styles.number}>103</Text>
   <Text style={{marginLeft:'80%',top:'-60%',fontSize:10}}>16/10/23</Text>
  

  <View style={[styles.underline]} /> 

</View>
  
  <View style={[styles.container6]}> 
  
 
    
    
  
  <Image source={require('../Assets/img/ventilator.png')}
      style={{width:25,height:25,marginTop:'-6%'}}/>
   <Text style={styles.age}>Respiration Rate:</Text>
   <Text style={styles.update}>Last Updated on</Text>
   <Text style={styles.number}>103</Text>
   <Text style={{marginLeft:'80%',top:'-60%',fontSize:10}}>16/10/23</Text>
  

  <View style={[styles.underline]} /> 

</View>
  
  <View style={[styles.container7]}> 
  
 
    
    
  
  <Image source={require('../Assets/img/blood.png')}
      style={{width:25,height:25,marginTop:'-6%'}}/>
   <Text style={styles.age}>Blood Pressure:</Text>
   <Text style={styles.update}>Last Updated on</Text>
   <Text style={styles.number}>103</Text>
   <Text style={{marginLeft:'80%',top:'-60%',fontSize:10}}>16/10/23</Text>
  

  <View style={[styles.underline]} /> 

</View>

<View style={[styles.container8]}> 
  
 
    
    
  
  <Image source={require('../Assets/img/oxygen.png')}
      style={{width:25,height:25,marginTop:'-6%'}}/>
   <Text style={styles.age}>Oxygen Saturation:</Text>
   <Text style={styles.update}>Last Updated on</Text>
   <Text style={styles.number}>103</Text>
   <Text style={{marginLeft:'80%',top:'-60%',fontSize:10}}>16/10/23</Text>
  

  <View style={[styles.underline]} /> 

</View>


  </View>
  )
}

export default Vitals

const styles = StyleSheet.create({

    background:{

      width:'100%',
      height:'17%',
      backgroundColor:'#D6708B',
      borderBottomLeftRadius:50,
      borderBottomRightRadius:50,
      
     
    },
    text:{

        fontSize:30,
        color:'#d6708b',
        fontWeight:'700',
        alignSelf:'center',
        marginTop:'2%'
    },

    detail:{

        color:'black',
       fontSize:20,
       marginLeft:'5%',
       bottom:'-50%',
       fontWeight:'700'
    },

    age:{

      color:'black',
      marginLeft:'10%',
      top:'-25%',
      fontSize:14,
      
    },

    update:{
    color:'grey',
    top:'-25%',
    marginLeft:'10%',
    fontSize:10

    },

    number:{

      color:'black',
      marginLeft:'80%',
      top:'-60%',
      color:'#d6708b'
      
    },

    container: {
 width: '90%',
 borderBottomWidth: 0,
 borderBottomColor: '#000', 
 marginLeft:'5%',
 top:'3%'
 
}, 



underline:
 { 
  position: 'absolute', 
bottom: '53%', 
left: 0,
 right: 0,
 height: 1, 
backgroundColor: '#D6708B',


},
container2:{
  width: '90%',
  borderBottomWidth: 0,
  borderBottomColor: '#000', 
  marginLeft:'5%',
  top:'-10%'
  

},
container3:{
  width: '90%',
  borderBottomWidth: 0,
  borderBottomColor: '#000', 
  marginLeft:'5%',
  top:'-15%'
},
temp:{

  top:'-540%',
  marginLeft:'5%',
  fontSize:20,
  color:'black',
  fontWeight:'700'

},

container4:{
  width: '90%',
  borderBottomWidth: 0,
  borderBottomColor: '#000', 
  marginLeft:'5%',
  top:'-22%'
},
 
pulse:{
  top:'-690%',
  marginLeft:'5%',
  fontSize:20,
  color:'black',
  fontWeight:'700'


},

container5:{
  width: '90%',
  borderBottomWidth: 0,
  borderBottomColor: '#000', 
  marginLeft:'5%',
  top:'-28%'
},

container6:{
  width: '90%',
  borderBottomWidth: 0,
  borderBottomColor: '#000', 
  marginLeft:'5%',
  top:'-34%'
},
container7:{
  width: '90%',
  borderBottomWidth: 0,
  borderBottomColor: '#000', 
  marginLeft:'5%',
  top:'-43%'
},

container8:{
  width: '90%',
  borderBottomWidth: 0,
  borderBottomColor: '#000', 
  marginLeft:'5%',
  top:'-52%'
},

});

