import { View, Text, StyleSheet } from 'react-native';

const Media = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>MEDIA</Text>
        </View>
    )
}
export default Media;

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