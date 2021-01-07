import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const Header = (props) => {

    const { type, content, onPress } = props;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const color = type === 'primary' ? '#FFFFFF' : '#171A20';

    return (
        <View style={styles.buttonWrapper}>
            <Pressable style={[styles.button, {backgroundColor}]}
            onPress={onPress}
            > 
            <Text style={[styles.text, {color}]}>{content}</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    
    buttonWrapper: {
        width: '100%',
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '80%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12
    },
    text: {
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
});


export default Header