import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'
import Modal from './src/components/modal'
import { Button, TextInput } from 'react-native-paper';
// import TextInputMask from 'react-native-text-input-mask'
import Carousel from './src/components/carousel'
import { TextInputMask} from 'react-native-masked-text'
import Collapse from './src/components/collapse'
import Formulario from './src/components/formulario';

const notificacao = [
  {
    nome: 'Suspensão das aulas do período da MANHÃ no dia 06/03/2020',
    descricao: 'Prezadas famílias, Conforme anunciado no dia da reunião com vocês em (15/02/2020), e manifestado na carta aberta disponível no link http://www.eseba.ufu.br/acontece/2020/02/carta-aberta-comunidade-escolar-da-eseba-ufu, nossa escola vem unindo esforços para garantir o cumprimento das aulas, entretanto, as contratações para suprir a falta de docentes foram autorizadas apenas no dia 02/03/2020 e os docentes substitutos ainda não chegaram na escola devidos aos trâmites legais de contração. Por esta razão, o Conselho Pedagógico e Administrativo da Eseba/UFU, deliberou pela suspensão das aulas no dia 06 de março de 2020, no turno da MANHÃ, para que o corpo docente e técnico possa discutir sobre a situação da escola frente ao atual cenário. Salientamos que, nesta reunião, avaliaremos a necessidade de uma Assembleia com toda Comunidade Escolar. Contamos com sua compreensão e apoio! Cordialmente, Equipe Gestora Eseba/UFU',
    remetente: 'Diretoria',
    destinatario:null,
    replica:false,
    dataCriacao:'2020-03-06T03:02:40.000+0000'
  }
]

 

const App = () => {
  const [modal, setModal] = useState(false)
  const [text, setText] = useState('0111')
  const [mascara, setMascara] = useState('R$ [000].[000].[000]')
  const inputEl = useRef(null);

  setTimeout(() => {
    // setMascara('[000000]-[00000]')
    // Alert.alert("executou..")
  }, 1000);

  return(
    <View style={styles.container}>
      <Formulario />

      {/* <Carousel / */}
      {/* <Collapse data={notificacao}/>
      <TouchableOpacity style={styles.button} onPress={() => setModal(true)}>
        <Text>Abrir Modal</Text>
      </TouchableOpacity> */}

      {/* <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
        Press me
      </Button> */}
      {/* <TextInput
        label="Numero telefone"
        value="9999999999"
        render={props =>
          <TextInputMask
            {...props}
            mask={mascara}
          />
        }
      />      */}
      {/* <TextInput
        label="Numero telefone"
        value={text}
        render={props =>
          <TextInputMask
            {...props}
            type={'money'}
            value={text}
            onChangeText={text => setText(text.replace('R$', ''))}
            onChange={text => setText(text)}
            ref={inputEl}
          />
        }
      /> */}
      {/* <Text>
        {text.replace('R$', '')}
        
      </Text>  

      <TextInputMask
        type={'money'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) '
        }}
        value={text}
        onChangeText={text => {
          setText(text)
        }}
        // add the ref to a local var
      /> */}
 

      {/* <Modal
        show={modal}
        close={() => setModal(false)}
      >
        <Text>modal..</Text>        
      </Modal> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 22
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginTop: 20
  }
})

export default App