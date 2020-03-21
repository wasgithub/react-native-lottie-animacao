import React from 'react';
import PropTypes from 'prop-types';
import { TextInput as PaperTextInput } from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';

const InputMask = props => {
    const { mask } = props
    return (
        <PaperTextInput
            {...props}
            value={props.value}
            render={props =>
                <TextInputMask
                    value={props.value}
                    {...props}
                    onChangeText={(formatted, extracted) => {
                        props.onChangeText(extracted)
                    }}
                    mask={mask}
                />
            }
      />
    )
}

InputMask.PropTypes = {
    mask: PropTypes.string
}

InputMask.defaultProps = {
    mask: "([00]) [0] [0000]-[0000]"
}



export default InputMask
