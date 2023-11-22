import { Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import Colors from '../theme/Colors';

const ToggleButtonComponent = ({ icon, text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.toggleButton}>
            <Icons name={icon} size={22} color={Colors.grayDrawer} style={styles.icon} />
            <Text style={styles.toggleButtonText}>{text}</Text>
        </TouchableOpacity>
    );
};
export default ToggleButtonComponent;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    toggleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: windowHeight * 0.02,
    },
    icon: {
        paddingHorizontal: windowWidth * 0.05,
    },
    toggleButtonText: {
        fontSize: 14,
        marginHorizontal: windowWidth * 0.03,
        color: Colors.grayDrawer,
    },
});