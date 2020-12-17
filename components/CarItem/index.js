import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './style'
import ButtonItem from '../ButtonItem'

const CarItem = (props) => {


    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.imageStyle} />
            <View style={styles.heading}>
                <Text style={styles.carTitle}>Model S</Text>
                <Text style={styles.carInformation}>Starting at $69 000</Text>
            </View>
            <ButtonItem type="primary" content="Custom Order" onPress={() => {
                console.warn('Custom Order')
            }}/>
            <ButtonItem type="secondary" content="Existing inventory" onPress={() => {
                console.warn('Existing inventory')
            }}/>
        </View>
    );
}

export default CarItem
