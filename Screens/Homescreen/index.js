import React from 'react'
import { View, Text } from 'react-native'

export default function HomeScreen() {
    return (
        <View>
            <View style={styles.root}>
                <Image style={styles.image} source={{uri : `https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg
`}} />
                <View style={styles.rightContainor}> 
                    <Text style={styles.title} numberOfLines={3}>Logitech M221 Wireless Mouse, Silent Buttons, 2.4 GHz with USB Mini Receiver, 1000 DPI Optical Tracking, 18-Month Battery Life, Ambidextrous PC/Mac/Laptop - Charcoal Grey</Text>
                    <Text style={styles.description}>Rating </Text>
                    <Text style={styles.price}>from $13.57 </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root : {
        flexDirection : 'row',
        margin: 10,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    image: {
        width: 150,
        height: 150,
    },
    rightContainor: {
        padding: 10,
        flex: 1,

    },
    title: {
        
    },
    description: {},
    price: {},

})
