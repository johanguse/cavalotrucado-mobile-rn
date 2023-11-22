import { View, Text, StyleSheet } from 'react-native';
const Posts = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>POSTS</Text>
        </View>
    )
}
export default Posts;

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