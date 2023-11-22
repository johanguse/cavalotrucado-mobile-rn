import { View, Text, StyleSheet } from 'react-native';

const Pages = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>PAGES</Text>
        </View>
    )
}
export default Pages;

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