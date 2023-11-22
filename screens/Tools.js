import { View, Text, StyleSheet } from 'react-native';

const Tools = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>TOOLS</Text>
        </View>
    )
}
export default Tools;

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