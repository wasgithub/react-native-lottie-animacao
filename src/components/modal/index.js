import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native'
import styles from './styles';

const { height } = Dimensions.get('window')

const Modal = props => {

  const { show, close, color, children } =  props;

  const [state, setState] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height)
  })

  const openModal = () => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100 }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300 }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true })
    ]).start()
  }

  const closeModal = () => {
    Animated.sequence([
      Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 0, duration: 300 }),
      Animated.timing(state.container, { toValue: height, duration: 100 })
    ]).start()
  }

  useEffect(() => {
    if(show){
      openModal()
    }else{
      closeModal()
    }
  }, [show])

  

  return( 
    <Animated.View 
      style={[styles.container, {
        opacity: state.opacity,
        transform: [
          { translateY: state.container }
        ]
      }]}
    >
      <Animated.View 
        style={[styles.modal, {
          transform: [
            { translateY: state.modal }
          ]
        }]}
      >
        <View style={styles.indicator} />

        { children }

        <TouchableOpacity style={{...styles.btn, color: color}} onPress={close}>
          <Text style={{ color: '#fff' }}>Close</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  )
}

Modal.defaultprops = {
    color: '#9b5'
}

export default Modal