import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const Profile = ({navigation}) => {

  const Vitals=()=>{
   
  navigation.navigate('Vitals')

 
  }

  const logout=()=>{
   
    navigation.navigate('Login')
  }
  
  return (
    <View style={styles.background}>
      <View>
        <TouchableOpacity>
          <Image
            source={require('../Assets/img/newlogo.png')}
            style={{
              width: 135,
              height: 32,
              alignSelf: 'center',
              marginTop: '6%',
            }}
          />
        </TouchableOpacity>

        <View>
          <Image
            source={require('../Assets/img/newcircle.png')}
            style={{height: 40, width: 40, marginLeft: 30, top: -20}}
          />
        </View>

        {/* <View>
        <Image source={require('../Assets/img/signcircle4.png')}/>
      </View> */}

        <View>
          <Image
            source={require('../Assets/img/avator.png')}
            style={{width: 140, height: 140, alignSelf: 'center', top: '-20%'}}
          />
        </View>
        <View>
          <Image
            source={require('../Assets/img/newcircle.png')}
            style={{width: 23, height: 23, marginLeft: '85%'}}
          />
        </View>

        <View>
          <Text
            style={{
              color: '#D6708B',
              alignSelf: 'center',
              fontSize: 20,
              top: -55,
              left: -5,
            }}>
            Edit Profile
          </Text>
        </View>
        <View>
          <View style={{bottom:70}}>
            <View style={{flexDirection: 'row', gap: 15}}>
              <Image
                source={require('../Assets/img/user.png')}
                style={{width: 24, height: 25, marginLeft: 30,top:45}}
              />

              <TextInput
                placeholder="Full Name"
                placeholderTextColor={'#D6708B'}
                underlineColorAndroid="#000000"
                style={{
                  width: '70%',
                  alignSelf: 'center',
                  marginTop: 30,
                  right:'14%'
                }}
              />
            </View>

            <View style={{flexDirection: 'row', gap: 17}}>
              <Image
                source={require('../Assets/img/smartphone.png')}
                style={{width: 20, height: 21, marginLeft: 30, bottom: -20}}
              />
              <TextInput
                placeholder="Mobile No."
                placeholderTextColor={'#D6708B'}
                underlineColorAndroid="#000000"
                style={{
                  width: '70%',
                  alignSelf: 'center',
                  marginTop: 4,
                  right:'14%'
                }}
              />
            </View>

            <View style={{flexDirection: 'row', gap: 15}}>
             <Text style={{fontSize:20,top:15,marginLeft:30}}>@</Text>
              <TextInput
                placeholder="Email Address."
                placeholderTextColor={'#D6708B'}
                underlineColorAndroid="#000000"
                style={{
                  width: '70%',
                  alignSelf: 'center',
                  marginTop: 4,
                  right:'14%'
                }}
              />
            </View>

            <View style={{flexDirection: 'row', gap: 14}}>
              <Image
                source={require('../Assets/img/height.png')}
                style={{width: 28, height: 32, marginLeft: 25, bottom: -20}}
              />
              <TextInput
                placeholder="Height(in CM)"
                placeholderTextColor={'#D6708B'}
                underlineColorAndroid="#000000"
                style={{
                  width: '70%',
                  alignSelf: 'center',
                  marginTop: 4,
                  right:'17%'
                }}
              />
            </View>
          </View>
          <View style={{top: -105}}>
            <View style={{flexDirection: 'row', gap: 14}}>
              <Image
                source={require('../Assets/img/weight-scale.png')}
                style={{width: 24, height: 25, marginLeft: 25, top:56}}
              />

              <TextInput
                placeholder="Weight(in KG)"
                placeholderTextColor={'#D6708B'}
                underlineColorAndroid="#000000"
                style={{
                  width: '70%',
                  alignSelf: 'center',
                  marginTop: 40,
                  right:'10%'
                }}
              />
            </View>

            <View style={{flexDirection: 'row', gap: 14}}>
              <Image
                source={require('../Assets/img/question.png')}
                style={{width: 24, height: 25, marginLeft: 25, top:20}}
              />
              <TextInput
                placeholder="Help & Support"
                placeholderTextColor={'#D6708B'}
                underlineColorAndroid="#000000"
                style={{
                  width: '70%',
                  alignSelf: 'center',
                  marginTop: 4,
                 right:'14%'
                }}
              />
            </View>

            <View style={{flexDirection: 'row', gap: 14}}>
              <Image
                source={require('../Assets/img/privacy.png')}
                style={{width: 24, height: 25, marginLeft: 25, top:20}}
              />
              <TextInput
                placeholder="Privacy Policy"
                placeholderTextColor={'#D6708B'}
                underlineColorAndroid="#000000"
                style={{
                  width: '70%',
                  alignSelf: 'center',
                  marginTop: 4,
                  right:'16%'
                }}
              />
            </View>

            <View style={{flexDirection: 'row', gap: 14}}>
              <Image
                source={require('../Assets/img/terms.png')}
                style={{width: 24, height: 25, marginLeft: 25, top:20}}
              />
              <TextInput
                placeholder="Terms and Conditions"
                placeholderTextColor={'#D6708B'}
                underlineColorAndroid="#000000"
                style={{
                  width: '70%',
                  alignSelf: 'center',
                  marginTop: 4,
                  right:'17%'
                }}
              />
            </View>
              
              <TouchableOpacity onPress={logout}>
            <Image
              source={require('../Assets/img/logout.png')}
              style={{width: 20, height: 20,top:17, marginLeft: 30}}
            />

            <View style={{flexDirection: 'row', marginLeft: 50,bottom:20, gap: 75}}>
             
             <Text style={{top:15,marginLeft:'3%',top:'5%',fontWeight:'700'}}>Logout</Text>
                 </View></TouchableOpacity>
              <View style={styles.button}>
                <TouchableOpacity onPress={Vitals}>
                  <Text
                    style={{textAlign: 'center', color: 'white', fontSize: 17}}>
                    View Vitals
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    
  );
};

export default Profile;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },

  button: {
    width: '30%',
    alignSelf: 'center',
     bottom:30,
    backgroundColor: '#D6708B',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginLeft:'40%'
    
  },
});
