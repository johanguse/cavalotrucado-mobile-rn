import { View, Text, StyleSheet } from 'react-native';

const Comments = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>COMMENTS</Text>
        </View>
    )
}
export default Comments;

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