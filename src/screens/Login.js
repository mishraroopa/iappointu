import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import CheckBox from 'react-native-check-box';

const Login = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const forgotpassNavi = () => {
    console.log('forgotpassword');
    navigation.navigate('ForgotPassword');
  };

  const Signup = () => {
    console.log('signup');
    navigation.navigate('Signup');
  };

  const profile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <Image
        source={require('../Assets/img/newlogo.png')}
        style={{
          width: 131,
          height: 32,
          alignSelf: 'center',
          top: '3%',
          marginLeft: '5%',
        }}
      />

      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../Assets/img/newdoc.png')}
          style={{width: 264, height: 370, marginTop: 8, marginLeft: -23}}
        />
        <Image
          source={require('../Assets/img/mak.png')}
          style={{width: '35%', height:'30%', marginTop: '18%', left: '-6%'}}
        />
        <Image
          source={require('../Assets/img/newcircle.png')}
          style={{
            alignSelf: 'flex-end',
            left: '-22%',
            width: '17.5%',
            height: '16.7%',
            top: '-20%',
          }}
        />
      </View>
      <View>
        <Image
          source={require('../Assets/img/newcircle.png')}
          style={{width: 22, height: 22, marginLeft: 235, top: -25}}
        />
      </View>
         
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../Assets/img/smartphone.png')}
            style={{width: '7%', height: '46%', marginLeft: '9%'}}
          />

          <TextInput
            style={{left: '5%', width: '75%'}}
            placeholder="Mobile Number"
            placeholderTextColor={'#000000'}
            // underlineColorAndroid="#B8094C"
           
          />
         <View style={styles.underline}></View>
         
        </View></View>

        <View style={styles.container2}>
          <Image
            source={require('../Assets/img/padlock.png')}
            style={{width:'8%', height: '45%', marginLeft: '4%'}}
          />
          <TextInput
            style={{left: '12%', width: '72%'}}
            placeholder="Password"
            placeholderTextColor={'#000000'}
            // underlineColorAndroid="#B8094C"
            secureTextEntry={true}
          />
       <View style={styles.underline1}></View>
       
        </View>
     

      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <CheckBox
            style={{marginLeft: '21%'}}
            checkBoxColor="#BF6F8A"
            isChecked={isChecked}
            onClick={handleCheck}
            rightText="Remember Me"
            rightTextStyle={{color: '#B8094C'}}
          />
        </View>

        <View>
          <TouchableOpacity onPress={forgotpassNavi}>
            <Text style={{color: '#B8094C', marginLeft: '11%'}}>
              ForgotPassword ?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection:'column'}}>
        <TouchableOpacity onPress={profile}>
          <Text style={styles.log}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.loginwith}>or login with</Text>
      
      </View>

      {/* <View>
        <Text style={styles.loginwith}>or login with</Text>
      </View> */}

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginLeft: 27,
          paddingVertical:10
        }}>
        <Image
          source={require('../Assets/img/googleimg.png')}
          style={{height: 29, width: 29, marginRight: 15}}
        />
        <Image
          source={require('../Assets/img/facebook.png')}
          style={{height: 29, width: 29, marginRight: 13}}
        />
      </View>

      <View>
        <Image
          source={require('../Assets/img/signup2.png')}
          style={styles.semicircle}
        />
      </View>

      <View style={{flexDirection: 'row', bottom: 150, marginLeft: 80}}>
        <Text style={{marginRight: 4, fontWeight: '800', color: 'black'}}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={Signup}>
          <Text style={{color: '#B8094C'}}>Signup Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  log: {
    alignSelf: 'center',
    top: '70%',
    marginLeft: '5%',
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    paddingVertical: 6,
    paddingHorizontal: 40,
    backgroundColor: '#D85788',
    borderRadius: 10,
    fontSize: 15,
  },
  loginwith: {
    marginLeft: '41%',
    marginTop: '7%',
    fontSize: 15,
    fontWeight: '800',
    color: 'black',
  },

  semicircle: {
    height: 150,
    width: 137,
    marginLeft:'65%',
   bottom:80,
   
  
  },

container:{

  width: '88%',
 borderBottomWidth: 0,
 borderBottomColor: '#000', 
 marginLeft:'5%',
 top:'1%',
 flexDirection:'column',

 },

underline:{


 position: 'absolute', 
bottom: '20%', 
left: 30,
 right: 0,
 height: 1, 
backgroundColor: '#D6708B',

},

container2:{

  flexDirection: 'row', 
  alignItems: 'center',
  width: '85%',
 borderBottomWidth: 0,
 borderBottomColor: '#000', 
 marginLeft:'8.5%',
 top:'1%'
 },

 underline1:{


  position: 'absolute', 
 bottom: '20%', 
 left: 14,
  right: 0,
  height: 1, 
 backgroundColor: '#D6708B',
 
 },

});
