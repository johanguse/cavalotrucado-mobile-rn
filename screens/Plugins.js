import { View, Text, StyleSheet } from 'react-native';

const Plugins = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>PLUGINS</Text>
        </View>
    )
}
export default Plugins;

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