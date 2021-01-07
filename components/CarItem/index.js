import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './style'
import ButtonItem from '../ButtonItem'

const CarItem = (props) => {

    const {name, tagline, image, taglineCTA} = props.car

    //console.log(" hell " + name)

    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.imageStyle} />
            <View style={styles.heading}>
                <Text style={styles.carTitle}>{name}</Text>
                <Text style={styles.carInformation}>{tagline}<Text>{' '}{taglineCTA}</Text></Text>
            </View>
            <View style={styles.buttonWrapper}>
                <ButtonItem type="primary" content="Custom Order" onPress={() => {
                    console.warn('Custom Order')
                }}/>
                <ButtonItem type="secondary" content="Existing inventory" onPress={() => {
                    console.warn('Existing inventory')
                }}/>
            </View>
            
        </View>
    );
}

export default CarItem
