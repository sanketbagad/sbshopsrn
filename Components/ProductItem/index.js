import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import FontAweSome from 'react-native-vector-icons/FontAwesome'


export default function ProductItem({product}) {
    return (
        <View style={styles.root}>
        <Image style={styles.image} source={{uri: product.image}} />
        <View style={styles.rightContainor}> 
            <Text style={styles.title} numberOfLines={3}> {product.title} </Text>
            <View style={styles.rating}>
                {[0,0,0,0,0].map((el, i) => (
                    <FontAweSome name={i < Math.floor(product.avgRating) ? "star": "star-0"} size={16} color="#ffd700" />
                ))}
                
                <Text>  {product.ratings} </Text>
            </View>
            <Text style={styles.price}> from ${product.price} </Text>
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
        marginVertical: 5,
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
