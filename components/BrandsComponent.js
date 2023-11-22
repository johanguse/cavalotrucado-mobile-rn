import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Colors from '../theme/Colors';
import TextComponent from './TextCompponent';
import { vehicleBrands } from '../utils/VehicleBrands';

const BrandsComponent = () => {

    const renderItem = ({ item, index }) => (
        <TouchableOpacity style={styles.brandItem}>
            <View style={[styles.brandBox, index === 0 ? styles.firstItemBox : null]}>
                <View style={styles.brandDetailContainer}>
                    {index === 0 ? (
                        <Icon name="truck" size={20} color={Colors.white} />
                    ) : (
                        <Image source={{ uri: item.image }} style={styles.brandImage} />
                    )}

                </View>
                <View style={styles.brandDetailContainer}>
                    <Text style={[styles.brandName, index === 0 ? styles.firstItemText : null]}>
                        {item.slug}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TextComponent style={styles.text}>Marcas</TextComponent>
            <FlatList
                horizontal
                data={vehicleBrands.data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>

    )
}
export default BrandsComponent;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: windowWidth * 0.01,
    },
    text: {
        paddingHorizontal: windowWidth * 0.03,
    },
    brandItem: {
        marginHorizontal: windowWidth * 0.03,
        alignItems: 'center',
    },
    firstItemBox: {
        width: windowWidth * 0.18,
        height: windowWidth * 0.20,
        backgroundColor: Colors.secondary,
        borderRadius: 16,
        borderWidth: 1,
    },
    firstItemImage: {
        width: 35,
        height: 30,
    },
    firstItemText: {
        color: Colors.white,
    },
    brandBox: {
        width: windowWidth * 0.20,
        height: windowWidth * 0.20,
        backgroundColor: Colors.white,
        marginVertical: windowHeight * 0.01,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: Colors.secondary,
        overflow: 'hidden',
    },
    brandDetailContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandImage: {
        width: 35,
        height: 30,
    },
    brandName: {
        textAlign: 'center',
        color: Colors.secondary,
        fontSize: 12,
    },
});




