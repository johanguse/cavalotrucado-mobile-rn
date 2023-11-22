import React, { useState, useRef } from 'react';
import { View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Dimensions, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import Colors from '../theme/Colors';

const SearchBarComponent = () => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const inputRef = useRef(null);

    const openKeyboard = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            setKeyboardVisible(true);
        }
    };

    const dismissKeyboard = () => {
        if (inputRef.current) {
            inputRef.current.blur();
            setKeyboardVisible(false);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.container}>
                <View style={styles.searchBarContainer}>
                    <TextInput
                        ref={inputRef}
                        placeholder='Buscar por algo...'
                        placeholderTextColor={Colors.grayTextColor}
                        style={styles.searchBarStyles}
                        onFocus={() => setKeyboardVisible(true)}
                    />
                    <TouchableOpacity onPress={openKeyboard}>
                        <Icons name="search" size={22} color={Colors.primary} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default SearchBarComponent;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth * 0.9,
        height: windowHeight * 0.07,
        marginVertical: windowHeight * 0.02,
        paddingHorizontal: windowWidth * 0.03,
        backgroundColor: Colors.white,
        borderRadius: 10,
    },
    searchBarStyles: {
        flex: 1,
        width: windowWidth * 0.9,
        height: windowHeight * 0.07,
        marginVertical: windowHeight * 0.02,
        paddingHorizontal: windowWidth * 0.03,
        backgroundColor: Colors.white,
        borderRadius: 10,
    },
});
