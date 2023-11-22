import { useNavigation, DrawerActions } from "@react-navigation/native";
import { View, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import Colors from '../theme/Colors';

const HeaderComponent = () => {

    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={openDrawer}
            >
                <Icons name="menu" size={26} color={Colors.primary} />
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/images/logo_cavalo-trucado.png')}
                    style={styles.logoStyles}
                />
            </View>
            <TouchableOpacity style={styles.iconContainer}>
                <Icons name="notifications-outline" size={22} color={Colors.primary} />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderComponent;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: Colors.white,
        height: windowHeight * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: Colors.colorShadow,
        borderBottomWidth: 0.5,
    },
    iconContainer: {
        paddingHorizontal: windowWidth * 0.04,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoStyles: {
        width: 130,
        height: 40,
    },
});


