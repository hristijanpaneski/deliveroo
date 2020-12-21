import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7'
    },
    title: {
        fontFamily: 'Circular Std', 
        fontSize: 17, 
        color: 'black',
        textAlign: 'center'
    },
    maincontainer: {
        flex: 1, 
    },
    contentframe: {
        borderBottomWidth: 1, 
        borderTopWidth: 1, 
        borderColor: colors.lightgray, 
        backgroundColor: 'white', 
        paddingLeft: 15
    },
    textItem: {
        fontFamily: 'Circular Std', 
        fontSize: 17, 
        color: 'black'
    },
    btn: {
        height: 50, 
        alignItems: 'center', 
        flexDirection: 'row'
    }
})

export default styles;