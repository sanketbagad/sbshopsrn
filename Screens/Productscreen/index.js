import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import product from "../../data/products";
import products from '../../data/products';
import { Picker } from '@react-native-picker/picker';

export default function ProductScreen() {
    const [selectedValue, setSelectedValue] = React.useState(product.options ? product.options[0] : null);

    return (
        <View>
            <Text style={styles.title}>{product.title}</Text>
           
            <Picker selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => (
                setSelectedValue(itemValue)
            )}>
                {product.options.map(option => (
                    <Picker.Item label={option} value={option} />
                ))}
                
            </Picker>

            <Text style={styles.price}>{product.price}</Text>

            <Text style={styles.description}>{product.description}</Text>
            
        </View>
    )
}
