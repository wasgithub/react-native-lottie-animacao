import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'absolute',
    },
    modal: {
      bottom: 0,
      position: 'absolute',
      backgroundColor: '#fff',
      width: '100%',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingLeft: 25,
      paddingRight: 25
    },
    indicator: {
      width: 50,
      height: 5,
      backgroundColor: '#ccc',
      borderRadius: 50,
      alignSelf: 'center',
      marginTop: 5
    },
    text: {
      marginTop: 50,
      textAlign: 'center'
    },
    btn: {
      width: '100%',
      height: 50,
      borderRadius: 10,
      backgroundColor: '#9b5',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30
    }
  })

  export default styles;
  