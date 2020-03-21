// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import { TextInput as PaperTextInput } from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask'
import InputMask from '../inputMask';

import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('Obrigatório'),
});


const Formulario = props => (
  <>
    <Formik
      initialValues={{}}
      onSubmit={values => console.log(values)}
      validationSchema={SignupSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }) => (
        <View>
          <TextInput
            label={'Nome'}
            onChangeText={handleChange('nome')}
            value={values.nome}
          />
          <PaperTextInput
            label={'E-mail'}
            value={values.email}
            onChangeText={handleChange('email')}
          />
          {errors.email && touched.email ? <Text>{errors.email}</Text> : null}
          <InputMask
            type={"numeric"}
            label='InputMask'
            value={values.inputmask}
            mask={'[0000]'}
            onChangeText={(text) => setFieldValue('inputmask', Number(text))}
            
            />
          <PaperTextInput
            label='Telefone'
            keyboardType="email-address"
            value={values.telefone}
            render={props =>
              <TextInputMask
                {...props}
                value={values.telefone}
                onChangeText={(formatted, extracted) => {
                  console.log(formatted) // +1 (123) 456-78-90
                  console.log(extracted) // 1234567890
                  setFieldValue('telefone', extracted)
                }}
                mask="([00]) [0] [0000]-[0000]"
              />
            }
            // onChangeText={handleChange('telefone')}
          />

          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
<TextInputMask
  onChangeText={(formatted, extracted) => {
    console.log(formatted) // +1 (123) 456-78-90
    console.log(extracted) // 1234567890
  }}
  mask={"+1 ([000]) [000] [00] [00]"}
/>    
  </>
);

export default Formulario; 

// onPress={() => setFieldValue('identificadorRepresentanteLegal', !values.identificadorRepresentanteLegal)}