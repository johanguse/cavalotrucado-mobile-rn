import { View, Text, FlatList, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../theme/Colors';
import TextComponent from './TextCompponent';
import { vehicleData } from '../utils/VehicleData';

const MainVehicleData = () => {

    const navigation = useNavigation();

    const handleCardPress = (item) => {
        navigation.navigate('VehicleDetailScreen', { item, modelName: item.vehicle_model_name });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)} >
            <Image source={{ uri: item.vehicle_main_photo }} style={styles.vehicleImage} />
            <View style={styles.cardContent}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.brandText}>{item.brand}</Text>
                    <Text style={styles.modelText}>{item.vehicle_model_name}</Text>
                </View>
                <Text style={styles.priceText}>R$ {item.vehicle_price !== null ? item.vehicle_price : 'null'}</Text>
                <View style={styles.shortTextContainer}>
                    <Text style={styles.shortText}>{item.vehicle_short_text_1 !== null ? item.vehicle_short_text_1 : 'null'}</Text>
                    <Text style={styles.shortText}>{item.vehicle_short_text_2 !== null ? item.vehicle_short_text_2 : 'null'}</Text>
                    <Text style={styles.shortText}>{item.vehicle_short_text_3 !== null ? item.vehicle_short_text_3 : 'null'}</Text>
                </View>
                <View style={styles.vehicleDetailContainer}>
                    <Text style={styles.vehicleDetails}>Ano: {item.vehicle_year}/{item.vehicle_year_model !== null ? item.vehicle_year_model : 'null'}</Text>
                    <Text style={styles.vehicleDetails}>    Km: {item.vehicle_km !== null ? item.vehicle_km : 'null'}</Text>
                </View>
                <View style={styles.locationContainer}>
                    <Icon name="location" size={16} color={Colors.grayTextColor} style={styles.locationMarker} />
                    <Text style={styles.locationDetails}>Localizada em {item.vehicle_state.label} - {item.vehicle_state.value}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <View>
                    <TextComponent style={styles.headingText}>Novidades</TextComponent>
                </View>
                <View>
                    <TextComponent style={styles.text}>Ver todas</TextComponent>
                </View>
            </View>

            <FlatList
                data={vehicleData.data}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

export default MainVehicleData;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {

    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headingText: {
        marginVertical: windowHeight * 0.02,
        paddingHorizontal: windowWidth * 0.03,
    },
    text: {
        fontSize: 13,
        fontWeight: 'normal',
        color: Colors.grayTextColor,
        paddingHorizontal: windowWidth * 0.03,
    },
    card: {
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
        marginHorizontal: windowWidth * 0.03,
        marginVertical: windowWidth * 0.02,
    },
    vehicleImage: {
        width: '100%',
        height: 250,
        borderRadius: 10,
    },
    cardContent: {
        paddingVertical: windowHeight * 0.02,
        paddingHorizontal: windowWidth * 0.04,
    },
    brandText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modelText: {
        color: Colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: windowWidth * 0.06,
    },
    priceText: {
        fontSize: 14,
        color: 'black',
    },
    shortTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    shortText: {
        color: Colors.grayTextColor,
        fontSize: 10,
    },
    vehicleDetailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    vehicleDetails: {
        fontSize: 12,
        color: 'black',
    },
    vehicleKmDetails: {
        paddingHorizontal: windowWidth * 0.01,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationMarker: {
        marginTop: windowHeight * 0.01,
        marginRight: windowWidth * 0.01,
    },
    locationDetails: {
        marginTop: windowHeight * 0.01,
        color: Colors.grayTextColor,
        fontSize: 12,
    },
});




