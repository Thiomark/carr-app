import { StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    
    carContainer: {
        height: Dimensions.get('screen').height,
        width: '100%',
        alignItems: 'center'
    },
    taglineCTA: {
        textDecorationLine: 'underline',
    },
    heading: {
        paddingTop: 70,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    carTitle: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    carInformation: {
        fontWeight: 'bold',
        color: '#5c5e62'
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    buttonWrapper: {
        width: '100%',
        position: 'absolute',
        bottom: 30
    }
});

export default styles;