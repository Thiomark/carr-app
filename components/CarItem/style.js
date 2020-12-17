import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    carContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    heading: {
        paddingTop: '2em',
        textAlign: 'center'
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
        bottom: '2em'
    }
});

export default styles;