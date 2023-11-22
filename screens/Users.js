import { View, Text, StyleSheet } from 'react-native';

const Users = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyles}>USERS</Text>
        </View>
    )
}
export default Users;

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