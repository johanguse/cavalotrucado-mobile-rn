import { View, ScrollView, Dimensions, VirtualizedList, StyleSheet } from 'react-native';

import SearchBarComponent from '../components/SearchBarComponent';
import BrandsComponent from '../components/BrandsComponent';
import MainVehicleData from '../components/MainVehicleData';

const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} >
            <View style={styles.searchContainer}>
                <SearchBarComponent />
            </View>
            <View style={styles.brands}>
                <BrandsComponent />
            </View>
            <View>
                <MainVehicleData />
            </View>
        </ScrollView>
    );
}

export default HomeScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {

    },
    searchContainer: {
    },
    brands: {

    },
});
