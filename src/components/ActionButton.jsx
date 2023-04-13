import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ActionButton = ({text}) =>{

    const { btn, btnText } = style;

    return (
        <TouchableOpacity style={btn}>
            <Text style={btnText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    btn: {
        marginTop: 12,
        padding: 8,
        backgroundColor: '#D93D3D',
        width: '100%',
        alignItems: 'center',
        borderRadius: 8
    },
    btnText : {
        fontSize: 16,
        fontWeight: '500',
        color: 'white'
    }
});

export default ActionButton;