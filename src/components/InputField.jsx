import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";

const InputField = ({ fieldName, handleInput, value }) =>{
    const { inputContainer, field, text } = style;
    return (
        <View style={inputContainer}>
            <Text style={text} >{fieldName}</Text>
            <TextInput secureTextEntry={true} onChangeText={value => {
                handleInput(value)
            }} defaultValue={value} style={field}/>
        </View>
    )
}

const style = StyleSheet.create({
    inputContainer : {
        marginTop: 8,
        gap: 4 ,
        width: '100%',
    },
    field :{
        borderRadius: 8,
        padding: 8,
        backgroundColor: '#756B62'
    },
    text : {
        color: 'white'
    }
});

export default InputField;