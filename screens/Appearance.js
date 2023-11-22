import { View, Text, StyleSheet } from 'react-native';

import Colors from '../theme/Colors';

const Appearance = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>APPEARANCE</Text>
        </View>

    )
}
export default Appearance;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyles: {
        color: Colors.primary,
    }
});