import React from 'react';
import { StyleSheet,View,Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
  interpolateColor,
  runOnJS,
} from 'react-native-reanimated';
import { useState } from 'react';


const BUTTON_WIDTH = 170;
const BUTTON_HEIGHT = 40;
const BUTTON_PADDING = 5;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;

const H_RANGE = SWIPEABLE_DIMENSIONS + 2 * BUTTON_PADDING;
const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const Swipebutton = ({ onToggle }) => {
  // Animated value for X translation
  const X = useSharedValue(0);

  // Toggled State
  const [toggled, setToggled] = useState(false);

  // Fires when animation ends
  const handleComplete = (isToggled) => {
    if (isToggled !== toggled) {
      setToggled(isToggled);
      onToggle(isToggled);
    }
  };

  // Gesture Handler Events
  const animatedGestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.completed = toggled;
    },
    onActive: (e, ctx) => {
      let newValue;
      if (ctx.completed) {
        newValue = H_SWIPE_RANGE + e.translationX;
      } else {
        newValue = e.translationX;
      }
      if (newValue >= 0 && newValue <= H_SWIPE_RANGE) {
        X.value = newValue;
      }
    },
    onEnd: () => {
      if (X.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
        X.value = withSpring(0);
        runOnJS(handleComplete)(false);
      } else {
        X.value = withSpring(H_SWIPE_RANGE);
        runOnJS(handleComplete)(true);
      }
    },
  });

  const InterpolateXInput = [0, H_SWIPE_RANGE];

  const AnimatedStyles = {
    swipeCont: useAnimatedStyle(() => ({})),
    colorWave: useAnimatedStyle(() => ({
      width: H_RANGE + X.value,
      opacity: interpolate(X.value, InterpolateXInput, [0, 1]),
    })),
    swipeable: useAnimatedStyle(() => ({
      backgroundColor: interpolateColor(
        X.value,
        [0, BUTTON_WIDTH - SWIPEABLE_DIMENSIONS - BUTTON_PADDING],
        ['#399299', '#fff'],
      ),
      transform: [{ translateX: X.value }],
    })),
    swipeText: useAnimatedStyle(() => ({
      opacity: interpolate(X.value, InterpolateXInput, [0.7, 0], Extrapolate.CLAMP),
      transform: [
        {
          translateX: interpolate(X.value, InterpolateXInput, [0, BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS], Extrapolate.CLAMP),
        },
      ],
    }),
  )};

  return (
    <Animated.View style={[styles.swipeCont, AnimatedStyles.swipeCont]}>
    
      <AnimatedLinearGradient
      
        style={[AnimatedStyles.colorWave, styles.colorWave]}
        colors={['#06d6a0', '#1b9aaa']}
        start={{ x: 0.0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        
      />
     
       <Image source={require('../Assets/img/whitetick.png')}
        style={{width:'10%',height:'45%',zIndex:999,marginLeft:'4%'}}
      />
      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View style={[styles.swipeable, AnimatedStyles.swipeable]} 
          
        />
      </PanGestureHandler>
      <Animated.Text style={[styles.swipeText, AnimatedStyles.swipeText]}>Book Now </Animated.Text>
      <View style={{marginLeft:'8%'}}>
      <Image source = {require('../Assets/img/arrow.png')}
        style={{width:20,height:20}}
      />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  swipeCont: {
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    backgroundColor: '#EDEEEF',
    borderRadius: BUTTON_HEIGHT,
    padding: BUTTON_PADDING,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  colorWave: {
    position: 'absolute',
    left: 0,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT,
  },
  swipeable: {
    position: 'absolute',
    left: BUTTON_PADDING,
    height: SWIPEABLE_DIMENSIONS,
    width: SWIPEABLE_DIMENSIONS,
    borderRadius: SWIPEABLE_DIMENSIONS,
    zIndex: 3,
   
  },
  swipeText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    zIndex: 2,
    color: '#1b9aaa',
    marginLeft:'20%'
  },
});

export default Swipebutton;