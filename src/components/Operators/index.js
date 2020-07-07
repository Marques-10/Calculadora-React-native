import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    numbers: {
        height: 81.2,
        backgroundColor: '#1C1C1C',
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 30,
        color: '#FFF',
    }
})

export default props => {
    return (
        <TouchableOpacity onPress={() => props.onClick(props.label)} style={styles.numbers}>
            <Text style={styles.text}>{props.label}</Text>
        </TouchableOpacity>
    )
}