import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FontAweSome from 'react-native-vector-icons/FontAwesome'
import ProductItem from '../../Components/ProductItem'
import products from '../../data/products'

export default function HomeScreen() {
    return (
        <View style={styles.page}>
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 10,
        margin: 3,
    },
    
})
