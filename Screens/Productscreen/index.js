import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import product from "../../data/products";
import products from '../../data/products';

export default function ProductScreen() {
    return (
        <View>
            <Text style={styles.title}>{product.title}</Text>

            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
        </View>
    )
}
