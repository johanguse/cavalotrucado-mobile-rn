import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("HomeScreen")
        }, 3000)
    }, [])
    return (
        <ImageBackground
            source={require('../assets/images/image_banner.png')}
            style={styles.container}
            imageStyle={styles.bgImage}
            resizeMode={"cover"}
        >
            <Image source={require('../assets/images/logo_cavalo-trucado.png')} />
        </ImageBackground >
    )
}
export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgImage: {
        flex: 1,
        opacity: 0.4,
    },
})