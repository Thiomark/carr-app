import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarItem from './components/CarItem'


export default function App() {
    const image = require(`./assets/images/ModelX.jpeg`)
    return (
        <View style={styles.container}>
            <CarItem name="Model X" tagline="Starting from $99,500" image={image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
