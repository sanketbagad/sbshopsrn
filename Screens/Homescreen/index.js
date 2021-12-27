import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FontAweSome from 'react-native-vector-icons/FontAwesome'
import ProductItem from '../../Components/ProductItem'


export default function HomeScreen() {
    return (
        <View style={styles.page}>
            <ProductItem />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 10,
        margin: 3,
    },
    
})
