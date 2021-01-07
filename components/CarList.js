import React from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import CarItem from './CarItem'
import listOfCars from '../data/cars'

const CarList = (props) => {

    return (
        <View style={styles.wrapper}>
            <FlatList 
                data={listOfCars} 
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <CarItem car={item}/>}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    
    wrapper: {
        width: '100%'
    },
});


export default CarList