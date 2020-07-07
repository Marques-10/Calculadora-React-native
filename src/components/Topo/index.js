import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{props.topoTitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {    
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 10,
        height: 40,
        backgroundColor: '#CCC',
    },
    title: {
        fontSize: 18,
        fontFamily: 'roboto,monospace',
        fontWeight: 'bold',
    }
})