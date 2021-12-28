import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

export default function QuantitySelector() {
    const onMinus = () => {

    }

    const onPlus = () => {

    }
    return (
        <View style={styles.root}>
            <Pressable style={styles.button} onPress={onMinus}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>

            <Text style={styles.quantity}>1</Text>

            <Pressable style={styles.button} onPress={onPlus}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems:"center",
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 10,
        justifyContent: 'space-between',
        width: 100,
    },
    button: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#d1d1d1",
    },
    buttonText: {
        fontSize: 20,
    },
    quantity: {
        color: '#007eb9',
    }
})
