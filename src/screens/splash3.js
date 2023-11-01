import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { Shadow } from 'react-native-shadow-2';

const Splash3 = ({navigation}) => {
  const account = () => {
    console.log('Login');
    navigation.navigate('Login');
  };
  const icon = () => {
    console.log('Login');
    navigation.navigate('Login');
  };

  return (
    <View style={{backgroundColor: '#ffb4bc', flex: 1}}>
      <View style={styles.card}></View>
      <TouchableOpacity onPress={account}>
        <Image
          source={require('../Assets/img/newlogo.png')}
          style={{width: 130, height: 32, top: -630, alignSelf: 'center'}}
        />
      </TouchableOpacity>
      <View>
        <Image
          source={require('../Assets/img/avator.png')}
          style={{width: 140, height: 140, alignSelf: 'center', top: '-435%'}}
        />
      </View>

      <View>
      <Shadow distance={10}
      startOpacity={1}
      offset={[0,0]}
      radius={5}>
        <Image
          source={require('../Assets/img/calender3.png')}
          style={styles.calender}
        />
      </Shadow>
        
      </View>
      <View style={styles.footer}>
        <View>
          <View style={{marginLeft: 40}}>
            <Text style={{color: 'white', marginTop: 20, marginRight: 68}}>
              CHOOSE TIME
            </Text>
          </View>
          <Text style={styles.button1}>Morning</Text>
          <Text style={styles.button2}>Afternoon</Text>
          <Text style={styles.button3}>Evening</Text>
        </View>
        <View>
          <Image
            source={require('../Assets/img/line.png')}
            style={{height: 140, left: -150, marginTop: 20}}
          />
        </View>
        <View style={{right: 230, marginTop: 16}}>
          <Text style={{color: 'white', fontSize: 20, left: -35}}>
            Now You Are{' '}
          </Text>
          <Text style={{color: 'white', fontSize: 20, left: -38}}>
            {' '}
            Ready To Go{' '}
          </Text>
          <Text style={{color: 'white', fontSize: 20, left: -38}}>
            {' '}
            Stand With
          </Text>
        </View>
        <TouchableOpacity onPress={icon}>
          <Image
            source={require('../Assets/img/icon.png')}
            style={{
              width: 40,
              height: 40,
              left: -648,
              alignSelf: 'center',
              bottom: -190,
              marginLeft: 50,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash3;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#d6708b',
    borderBottomLeftRadius: 900, 
    borderBottomRightRadius: 900, 
    borderTopLeftRadius: 900,
    borderTopRightRadius: 900,

    height: 650,
    width: 650,
    top: -500,
    left: -150,
  },

  calender: {
    height: 175,
    width: 380,
    bottom: 559,
    marginLeft: -2,
    shadowOffset: {width: 20, height: 15},
    shadowOpacity: 500,
    shadowBlur: 1.0,
    shadowRadius: 20.0,
    shadowColor: 'black',

    elevation: 15,
  },
  footer: {
    height: 249,
    width: 400,
    backgroundColor: '#d6708b',
    top: -520,
    flexDirection: 'row',
    gap: 150,
  },
  button1: {
    width: 100,
    height: 22,

    marginTop: 10,
    marginLeft: 40,
    textAlign: 'center',
    borderRadius: 9,
    backgroundColor: '#a7143b',
    color: 'white',
  },
  button2: {
    width: 100,
    height: 22,

    marginTop: 10,
    marginLeft: 40,
    textAlign: 'center',
    borderRadius: 9,
    backgroundColor: '#FFFFFF',
    color: 'black',
  },

  button3: {
    width: 100,
    height: 22,

    marginTop: 10,
    marginLeft: 40,
    textAlign: 'center',
    borderRadius: 9,
    backgroundColor: '#ffffff',
    color: 'black',
  },
});
