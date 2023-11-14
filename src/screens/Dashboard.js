import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import Swipebutton from './Swipebutton';




const Dashboard = ({navigation}) => {

  const handleToggle = ()=>{
    console.log("TOggled")
  }

  const appoint=()=>{
   
    navigation.navigate('Appointment')
  }
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <View style={[styles.background, styles.shadow]}>
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
          style={{width: '17%', height: '54%', marginLeft: '75%', top: '-59%'}}
        />
      </View>

      <View style={styles.assembler}>
        <View style={styles.main}>
          <TextInput
            placeholder="search"
            placeholderTextColor={'#000'}
            style={styles.input}></TextInput>
        </View>
        <View style={styles.button}>
          <Image
            source={require('../Assets/img/magnifying-glass3.png')}
            style={{
              width: '27%',
              height: '37.9%',
              marginLeft: '30%',
              top: '39%',
            }}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          gap: 15,
          marginLeft: '4%',
          bottom: '10%',
        }}>
        <View style={styles.card2}>
          <Image
            source={require('../Assets/img/hospital3.png')}
            style={{
              alignSelf: 'center',
              width: '60%',
              height: '60%',
              marginTop: '12%',
            }}
          />
          <Text
            style={{
              color: '#034039',
              marginTop: '25%',
              marginLeft: '10%',
              width: '130%',
            }}>
            Clinic
          </Text>
        </View>
        <View style={styles.card2}>
          <Image
            source={require('../Assets/img/ambulance.png')}
            style={{
              alignSelf: 'center',
              width: '60%',
              height: '60%',
              marginTop: '17%',
            }}
          />
          <Text
            style={{
              color: '#034039',
              marginTop: '20%',
              width: '130%',
              right: '12%',
              right: '25%',
            }}>
            Ambulance
          </Text>
        </View>
        <View style={styles.card2}>
          <Image
            source={require('../Assets/img/bloodtest.png')}
            style={{
              alignSelf: 'center',
              width: '60%',
              height: '60%',
              marginTop: '19%',
            }}
          />
          <Text
            style={{
              color: '#034039',
              marginTop: '20%',
              marginLeft: '2%',
              width: '130%',
            }}>
            bloodTest
          </Text>
        </View>
        <View style={styles.card2}>
          <Image
            source={require('../Assets/img/lab.png')}
            style={{
              alignSelf: 'center',
              width: '60%',
              height: '60%',
              marginTop: '12%',
            }}
          />
          <Text
            style={{
              color: '#034039',
              marginTop: '26%',
              marginLeft: '24%',
              width: '130%',
            }}>
            Labs
          </Text>
        </View>
        <View style={styles.card2}>
          <Image
            source={require('../Assets/img/medicine.png')}
            style={{
              alignSelf: 'center',
              width: '60%',
              height: '60%',
              marginTop: '14%',
              marginLeft: '12%',
            }}
          />
          <Text
            style={{
              color: '#034039',
              marginTop: '25%',
              marginLeft: '1%',
              width: '130%',
              right: '10%',
            }}>
            {' '}
            Medicine
          </Text>
        </View>
      </View>

      <View style={{flexDirection: 'column', bottom: '1%', marginLeft: '4%'}}>
        <View style={{flexDirection: 'row', gap: 150}}>
          <Text
            style={{
              color: '#399299',
              marginTop: '4%',
              marginLeft: '3%',
              fontWeight: '600',
            }}>
            Appointment Today
          </Text>
          <Text style={{color: '#e4ad03', marginTop: '4%'}}>See All</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={{gap: 20, flexDirection: 'row', marginTop: '2%'}}>
            <View style={styles.card1}>
              <Image
                source={require('../Assets/img/monodr.png')}
                style={{
                  width: '25%',
                  height: '65%',
                  marginLeft: '5%',
                  marginTop: '4%',
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    marginTop: '5%',
                    marginLeft: '5%',
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: 17,
                    marginTop: '8%',
                  }}>
                  Dr muhammed Syahid
                </Text>
                <Text
                  style={{
                    marginLeft: '6%',
                    color: 'white',
                    fontSize: 13,
                    marginTop: '2%',
                  }}>
                  Dental Specialist
                </Text>
              </View>
            </View>
            <View style={styles.card1}>
              <Image
                source={require('../Assets/img/monodr.png')}
                style={{
                  width: '25%',
                  height: '65%',
                  marginLeft: '5%',
                  marginTop: '4%',
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    marginTop: '5%',
                    marginLeft: '5%',
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: 17,
                    marginTop: '8%',
                  }}>
                  Dr muhammed Syahid
                </Text>
                <Text
                  style={{
                    marginLeft: '6%',
                    color: 'white',
                    fontSize: 13,
                    marginTop: '2%',
                  }}>
                  Dental Specialist
                </Text>
              </View>
            </View>
            <View style={styles.card1}>
              <Image
                source={require('../Assets/img/monodr.png')}
                style={{
                  width: '25%',
                  height: '65%',
                  marginLeft: '5%',
                  marginTop: '4%',
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    marginTop: '5%',
                    marginLeft: '5%',
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: 17,
                    marginTop: '8%',
                  }}>
                  Dr muhammed Syahid
                </Text>
                <Text
                  style={{
                    marginLeft: '6%',
                    color: 'white',
                    fontSize: 13,
                    marginTop: '2%',
                  }}>
                  Dental Specialist
                </Text>
              </View>
            </View>
            <View style={styles.card1}>
              <Image
                source={require('../Assets/img/monodr.png')}
                style={{
                  width: '25%',
                  height: '65%',
                  marginLeft: '5%',
                  marginTop: '4%',
                }}
              />

              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    marginTop: '5%',
                    marginLeft: '5%',
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: 17,
                    marginTop: '8%',
                  }}>
                  Dr muhammed Syahid
                </Text>
                <Text
                  style={{
                    marginLeft: '6%',
                    color: 'white',
                    fontSize: 13,
                    marginTop: '2%',
                  }}>
                  Dental Specialist
                </Text>
              </View>
            </View>
            <View style={styles.card1}>
              <Image
                source={require('../Assets/img/monodr.png')}
                style={{
                  width: '25%',
                  height: '65%',
                  marginLeft: '5%',
                  marginTop: '4%',
                }}
              />
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    marginTop: '5%',
                    marginLeft: '5%',
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: 17,
                    marginTop: '8%',
                  }}>
                  Dr muhammed Syahid
                </Text>
                <Text
                  style={{
                    marginLeft: '6%',
                    color: 'white',
                    fontSize: 13,
                    marginTop: '2%',
                  }}>
                  Dental Specialist
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={{flexDirection: 'column', bottom: '4%', marginLeft: '4%'}}>
        <View style={{flexDirection: 'row', gap: 190}}>
          <Text
            style={{
              color: '#399299',
              marginTop: '10%',
              marginLeft: '3%',
              fontWeight: '600',
            }}>
            Top Doctors
          </Text>
          <Text style={{color: '#e4ad03', marginTop: '10%'}}>See All</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={{gap: 20, flexDirection: 'row', marginTop: '2%'}}>
            <View style={styles.card3}>
              <Image
                source={require('../Assets/img/doc9.png')}
                style={{
                  width: '30%',
                  height: '40%',
                  alignSelf: 'flex-end',
                  marginTop: '5%',
                  right: '10%',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  bottom: '40%',
                  marginLeft: '5%',
                }}>
                <Text style={{fontWeight: '600', fontSize: 17, color: 'white'}}>
                  {' '}
                  Dr.Gregory
                </Text>
                <Text style={{fontWeight: '600', fontSize: 17, color: 'white'}}>
                  Aronshitam
                </Text>
                <Text style={{marginTop: '3%',color:'white'}}>Heart surgeon</Text>
               
               <View style={{marginLeft:'1%',marginTop:'2%' ,flexDirection:'row',gap:15}}>
                <Swipebutton onToggle={handleToggle}  />
                <View style={styles.rectangle} >
                  <Image source={require('../Assets/img/blacktick.png')}
                    style={{width:'100%',height:'90%'}}
                  />
                </View>
              
                </View>
               
              </View>
            
            
            </View>
            <View style={styles.card3}>
            
              <Image
                source={require('../Assets/img/doc9.png')}
                style={{
                  width: '30%',
                  height: '40%',
                  alignSelf: 'flex-end',
                  marginTop: '10%',
                  right: '10%',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  bottom: '40%',
                  marginLeft: '5%',
                }}>
                <Text style={{fontWeight: '600', fontSize: 17, color: 'white'}}>
                  {' '}
                  Dr.Gregory
                </Text>
                <Text style={{fontWeight: '600', fontSize: 17, color: 'white'}}>
                  Aronshitam
                </Text>
                <Text style={{marginTop: '10%'}}>Heart surgeon</Text>
              </View>
            </View>
            <View style={styles.card3}>
              <Image
                source={require('../Assets/img/doc9.png')}
                style={{
                  width: '30%',
                  height: '40%',
                  alignSelf: 'flex-end',
                  marginTop: '10%',
                  right: '10%',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  bottom: '40%',
                  marginLeft: '5%',
                }}>
                <Text style={{fontWeight: '600', fontSize: 17, color: 'white'}}>
                  {' '}
                  Dr.Gregory
                </Text>
                <Text style={{fontWeight: '600', fontSize: 17, color: 'white'}}>
                  Aronshitam
                </Text>
                <Text style={{marginTop: '5%'}}>Heart surgeon</Text>
              </View>
            </View>
            <View style={styles.card3}>
              <Image
                source={require('../Assets/img/doc9.png')}
                style={{
                  width: '30%',
                  height: '40%',
                  alignSelf: 'flex-end',
                  marginTop: '10%',
                  right: '10%',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  bottom: '40%',
                  marginLeft: '5%',
                }}>
                <Text style={{fontWeight: '600', fontSize: 17, color: 'white'}}>
                  {' '}
                  Dr.Gregory
                </Text>
                <Text style={{fontWeight: '600', fontSize: 17, color: 'white'}}>
                  Aronshitam
                </Text>
                <Text style={{marginTop: '10%'}}>Heart surgeon</Text>
              </View>
            </View>
            <View style={styles.card3}>
              <Image
                source={require('../Assets/img/doc9.png')}
                style={{
                  width: '30%',
                  height: '40%',
                  alignSelf: 'flex-end',
                  marginTop: '10%',
                  right: '10%',
                }}
              />
              <View
                style={{
                  flexDirection: 'column',
                  bottom: '40%',
                  marginLeft: '5%',
                }}>
                <Text style={{fontWeight: '600', fontSize: 17, color: 'white'}}>
                  {' '}
                  Dr.Gregory
                </Text>
                <Text style={{fontWeight: '600', fontSize: 17, color: 'white'}}>
                  Aronshitam
                </Text>
                <Text style={{marginTop: '10%',color:'white'}}>Heart surgeon</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* <View style={{bottom: '3%'}}>
        <Image
          source={require('../Assets/img/footer.png')}
          style={{width: 360, height: 60}}
        />
      </View> */}
         <TouchableOpacity onPress={appoint}>
         <Text style={{color:'red',marginLeft:'50%'}}>hello</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '15%',
    backgroundColor: '#D6708B',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  shadow: {
    elevation: 20,
    shadowColor: 'black',
  },

  main: {
    width: 220,
    height: '40%',

    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: '#e8e3e3',
  },

  input: {
    marginLeft: 10,
    marginTop: 2,
  },
  button: {
    width: '20%',
    height: '40%',
    backgroundColor: '#399299',
    marginLeft: 0,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  assembler: {
    flexDirection: 'row',
    marginTop: '7%',
    marginLeft: 40,
    top:0,
    margin:0,
  },

  card1: {
    height: 110,
    width: 277,
    flexDirection: 'row',

    backgroundColor: '#399299',
    borderRadius: 15,
  },

  card2: {
    height: 55,
    width: 55,

    borderRadius: 50,
    backgroundColor: '#78B9BA',
    flexDirection: 'column',
  },
  card3: {
    height: 140,
    width: 250,

    borderRadius: 30,
    backgroundColor: '#399299',
    flexDirection: 'column',
  },
  rectangle:{
 
    width:40  ,
    height:40,
    backgroundColor:'#ffffff',
    borderRadius:20,
    bottom:1,
   
   
   


  }
});
