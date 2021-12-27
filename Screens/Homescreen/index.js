import React from 'react'
import { View, Text } from 'react-native'
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
