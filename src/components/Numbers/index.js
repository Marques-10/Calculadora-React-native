import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    numbers: {
        height: 101.1,
        width: 104.7,
        backgroundColor: '#A9A9A9',
        
    },
    text: {
        fontSize: 30,
        paddingTop: 30,
        textAlign: 'center',
    }
})

export default props => {
    return (
        <TouchableOpacity onPress={() => props.onClick(props.label)} style={styles.numbers}>
            <Text style={styles.text}>{props.label}</Text>
        </TouchableOpacity>
    )
}