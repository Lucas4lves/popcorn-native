import React from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";

const InputField = ({ fieldName, handleInput, value }) =>{
    const { inputContainer, field } = style;
    return (
        <View style={inputContainer}>
            <Text style={{color: 'white'}} >{fieldName}</Text>
            <TextInput onChangeText={value => {
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
        borderRadius: '8px',
        padding: 8,
        backgroundColor: '#756B62'
    }
});

export default InputField;