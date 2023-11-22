import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, Dimensions, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import Colors from '../theme/Colors';
import ToggleButtonComponent from '../components/ToggleButtonComponent';

const CustomDrawerContent = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const drawerItems = [
        { screenName: 'Dashboard', iconName: 'home' },
        { screenName: 'Posts', iconName: 'pencil-sharp' },
        { screenName: 'Media', iconName: 'images-sharp' },
        { screenName: 'Pages', iconName: 'document-text-sharp' },
        { screenName: 'Comments', iconName: 'chatbox-ellipses' },
        { screenName: 'Appearance', iconName: 'apps' },
        { screenName: 'Plugins', iconName: 'medkit' },
        { screenName: 'Users', iconName: 'people' },
        { screenName: 'Settings', iconName: 'settings' },
        { screenName: 'Tools', iconName: 'construct' },
    ];

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const darkModeText = isDarkMode ? 'Dark Mode' : 'Light Mode';

    return (
        <View style={styles.container}>
            {drawerItems.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.drawerItem}
                >
                    <Icons
                        name={item.iconName}
                        size={22}
                        color={Colors.grayDrawer}
                        style={styles.icon}
                    />
                    <Text style={styles.drawerItemText}>{item.screenName}</Text>
                </TouchableOpacity>
            ))}
            <View style={styles.modeContainer}>
                <ToggleButtonComponent
                    icon={isDarkMode ? 'moon' : 'sunny'}
                    text={darkModeText}
                    onPress={toggleDarkMode}
                />
                <Switch
                    value={isDarkMode}
                    onValueChange={toggleDarkMode}
                    trackColor={{
                        false: Colors.grayDrawer,
                        true: Colors.secondary,

                    }}
                    thumbColor={isDarkMode ? Colors.primary : 'white'}
                    style={styles.switchStyles}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.logoutContainer}>
                    <View style={styles.logoutContent}>
                        <Icons
                            name="log-out-outline"
                            size={22}
                            color={Colors.white}
                        />
                        <Text style={styles.logoutText}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default CustomDrawerContent;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    logo: {


    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: windowHeight * 0.02,
    },
    icon: {
        paddingHorizontal: windowWidth * 0.05,
    },
    drawerItemText: {
        fontSize: 14,
        marginHorizontal: windowWidth * 0.03,
        color: Colors.grayDrawer,
    },
    modeContainer: {
        flexDirection: 'row',
    },
    switchStyles: {
        marginLeft: windowWidth * 0.2,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: windowHeight * 0.01,
    },
    logoutContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.grayDrawer,
        height: windowHeight * 0.06,
    },
    logoutContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: windowWidth * 0.05,
    },
    logoutText: {
        fontSize: 14,
        marginHorizontal: windowWidth * 0.08,
        color: Colors.white,
    },
});





