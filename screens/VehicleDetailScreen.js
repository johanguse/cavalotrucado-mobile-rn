import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../theme/Colors';
import TextComponent from '../components/TextCompponent';
import { truckDetails } from '../utils/TruckDetails';
import { soldTruckDetails } from '../utils/SoldTruckDetails';

const VehicleDetailScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params;

    const [selectedImage, setSelectedImage] = useState(item.vehicle_main_photo);

    const photoUrls = [
        'https://media.publit.io/file/w_1201,h_1600,c_fit,q_70/stgcavalotrucado/267793248_4496830643747886_225496753163791245_n.jpg',
        'https://media.publit.io/file/w_1201,h_1600,c_fit,q_70/stgcavalotrucado/267595605_4496831403747810_771559848174606229_n.jpg',
        'https://media.publit.io/file/w_1000,h_1137,c_fit,q_70/stgcavalotrucado/267715904_4496830123747938_5952307518994718882_n.jpg',
        'https://media.publit.io/file/w_1201,h_1600,c_fit,q_70/stgcavalotrucado/267537494_4496832713747679_7550477388408791549_n.jpg',
        'https://media.publit.io/file/w_1201,h_1600,c_fit,q_70/stgcavalotrucado/268160685_4496831730414444_6103735402159167073_n.jpg',
        'https://media.publit.io/file/w_1201,h_1600,c_fit,q_70/stgcavalotrucado/268088184_4496831880414429_8984917315500553923_n.jpg',
        'https://media.publit.io/file/w_1201,h_1600,c_fit,q_70/stgcavalotrucado/267897747_4496833187080965_971983360040808806_n.jpg',
        'https://media.publit.io/file/w_1201,h_1600,c_fit,q_70/stgcavalotrucado/267799867_4496832523747698_7970404560197694455_n.jpg',
        'https://media.publit.io/file/w_1201,h_1600,c_fit,q_70/stgcavalotrucado/267784295_4496832400414377_3954115697075827648_n.jpg',
        'https://media.publit.io/file/w_1201,h_1600,c_fit,q_70/stgcavalotrucado/267780016_4496833610414256_2784463803553073213_n.jpg',
        'https://media.publit.io/file/w_1201,h_1600,c_fit,q_70/stgcavalotrucado/267765889_4496832933747657_7612994595932268852_n.jpg',
        'https://media.publit.io/file/w_1201,h_1600,c_fit,q_70/stgcavalotrucado/267736022_4496832053747745_8155064212996434228_n.jpg',
        'https://media.publit.io/file/w_1201,h_1600,c_fit,q_70/stgcavalotrucado/267711581_4496831610414456_1900518722646244021_n.jpg',
        'https://media.publit.io/file/w_1201,h_1600,c_fit,q_70/stgcavalotrucado/267659344_4496833703747580_2910803509829547830_n.jpg',
        'https://media.publit.io/file/w_1201,h_1600,c_fit,q_70/stgcavalotrucado/267586981_4496830903747860_3086910598170151569_n.jpg',
    ];

    const handleImagePress = (image) => {
        setSelectedImage(image);
    };

    const renderSoldTruckCard = ({ item }) => {
        return (
            <TouchableOpacity style={styles.soldTruckCard}>
                <Image source={{ uri: item.vehicle_main_photo }} style={styles.soldTruckImage} />
                <View style={styles.soldMarkContainer}>
                    <Text style={styles.soldMarkText}>VENDIDO</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.soldBrandText}>{item.brand}</Text>
                    <Text style={styles.soldModelText}>{item.vehicle_model_name}</Text>
                </View>
                <View style={styles.soldVehicleDetailContainer}>
                    <Text style={styles.soldVehicleDetails}>Ano: {item.vehicle_year}/{item.vehicle_year_model !== null ? item.vehicle_year_model : 'null'}</Text>
                    <Text style={styles.soldVehicleDetails}>    Km: {item.vehicle_km !== null ? item.vehicle_km : 'null'}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon
                        name="chevron-back"
                        size={24}
                        color='black'
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{item.vehicle_model_name}</Text>
            </View>

            <View style={styles.cardContainer}>
                <Image source={{ uri: selectedImage }} style={styles.vehicleImage} />

                <ScrollView
                    style={styles.container}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.imageContainer}>
                        {photoUrls.map((image, index) => (
                            <TouchableOpacity key={index} onPress={() => handleImagePress(image)}>
                                <Image source={{ uri: image }} style={styles.imageItem} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>

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

                <TouchableOpacity style={styles.waaBtn}>
                    <Image source={require('../assets/images/whatsapp.png')} style={styles.waaImage} />
                    <Text style={styles.waaText}>Conversar no WhatsApp</Text>
                </TouchableOpacity>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionHeadingText}>Descrição</Text>
                    <Text style={styles.descriptionText}>{truckDetails.data.vehicle_long_text}</Text>
                </View>

            </View>

            <View style={styles.soldContainer}>
                <TextComponent>Vendidos</TextComponent>
                <FlatList
                    data={soldTruckDetails.data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderSoldTruckCard}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

        </ScrollView>
    )
}
export default VehicleDetailScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        height: windowHeight * 0.09,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.colorShadow,
    },
    icon: {
        paddingLeft: windowWidth * 0.02,
    },
    headerTitle: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    cardContainer: {
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
        marginHorizontal: windowWidth * 0.03,
        marginVertical: windowWidth * 0.03,
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
    imageContainer: {
        flexDirection: 'row',
        marginVertical: windowHeight * 0.02,
    },
    imageItem: {
        width: 100,
        height: 100,
        marginHorizontal: windowWidth * 0.01,
        borderRadius: 10,
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
    waaBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: windowHeight * 0.02,
        marginHorizontal: windowWidth * 0.02,
        marginVertical: windowHeight * 0.01,
        backgroundColor: Colors.colorButtonWpp,
        borderRadius: 5,
        width: windowWidth * 0.6,
        borderTopColor: Colors.colorShadow,
    },
    waaImage: {
        width: 24,
        height: 24,
        marginRight: windowWidth * 0.02,
    },
    waaText: {
        fontSize: 14,
        color: Colors.white,
    },
    descriptionContainer: {
        paddingHorizontal: windowWidth * 0.02,
    },
    descriptionHeadingText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    descriptionText: {
        color: 'black',
        fontSize: 12,
    },
    soldContainer: {
        paddingHorizontal: windowWidth * 0.02,
    },
    soldTruckCard: {
        width: windowWidth * 0.4,
        height: windowHeight * 0.2,
        margin: windowWidth * 0.02,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: Colors.colorShadow,
        // position: 'relative',
    },
    soldTruckImage: {
        borderRadius: 10,
        width: '100%',
        height: 100,
    },
    soldMarkContainer: {
        position: 'absolute',
        top: windowWidth * 0.04,
        right: windowWidth * 0.04,
        backgroundColor: Colors.secondary,
        transform: [{ rotate: '45deg' }],
        zIndex: 1,
        paddingHorizontal: windowWidth * 0.02,
        paddingVertical: windowWidth * 0.01,
        borderRadius: 5,
    },
    soldMarkText: {
        color: 'white',
        fontSize: 10,
    },
    soldBrandText: {
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold',
        paddingLeft: windowWidth * 0.01,
    },
    soldModelText: {
        color: Colors.primary,
        fontSize: 13,
        fontWeight: 'bold',
        paddingHorizontal: windowWidth * 0.06,
    },
    soldVehicleDetailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: windowWidth * 0.01,
    },
    soldVehicleDetails: {
        fontSize: 9,
        color: 'black',
    },
});