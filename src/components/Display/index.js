import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.displayValue}>{props.displayValue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
        height: 270,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 20,
    },
    displayValue: {
        fontSize: 60
    }

})