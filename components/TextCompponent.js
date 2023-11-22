import { Text, Dimensions, StyleSheet } from 'react-native';

import Colors from '../theme/Colors';

const TextComponent = ({ children, style }) => {
    return (
        <Text style={[styles.textStyles, style]}>{children}</Text>
    )
}
export default TextComponent;

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    textStyles: {
        color: Colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: windowWidth * 0.02,
    },
});