import { View, Text, StyleSheet } from 'react-native';

const Settings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>SETTINGS</Text>
        </View>
    )
}
export default Settings;

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