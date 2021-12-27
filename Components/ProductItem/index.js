import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import FontAweSome from 'react-native-vector-icons/FontAwesome'


export default function ProductItem() {
    return (
        <View style={styles.root}>
        <Image style={styles.image} source={{uri : `https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg
`}} />
        <View style={styles.rightContainor}> 
            <Text style={styles.title} numberOfLines={3}>Logitech M221 Wireless Mouse, Silent Buttons, 2.4 GHz with USB Mini Receiver, 1000 DPI Optical Tracking, 18-Month Battery Life, Ambidextrous PC/Mac/Laptop - Charcoal Grey</Text>
            <View style={styles.rating}>
                <FontAweSome style={styles.star} name="star" size={15} color="orange" />
                <FontAweSome  style={styles.star} name="star" size={15} color="orange" />
                <FontAweSome  style={styles.star} name="star" size={15} color="orange" />
                <FontAweSome  style={styles.star} name="star" size={15} color="orange" />
                <FontAweSome  style={styles.star} name="star" size={15} color="orange" />
            
                <Text>13,369</Text>
            </View>
            <Text style={styles.price}>from $13.57 </Text>
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
        resizeMode: 'contain',
        flex:2,
    },
    rightContainor: {
        padding: 10,
        flex: 3,
    
    },
    title: {
        fontSize: 16,
    },
    description: {},
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    star: {
        margin: 2,
    }

})
