import React from 'react';
import {Text, View, StyleSheet, Button, Pressable} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/appBar';
import DeviceCard from '../components/deviceCard';
import SecondaryFlatButton from '../components/secondaryFlatButton';

const devices = [
    {
        name: 'Dispositivo 1',
        battery: '70',
        connected: true,
    },
    {
        name: 'Dispositivo 2',
        battery: '70',
        connected: false,
    },
];

const Home = () => {
    return (
        <SafeAreaView>
            <AppBar title="Aplicacion de Rastreo" />
            <View style={styles.container}>
                <View style={styles.addDevice}>
                    <SecondaryFlatButton
                        content="Vincular dispositivo"
                        icon={'add'}
                        centered
                    />
                </View>
                <FlatList
                    data={devices}
                    renderItem={({item}) => {
                        return <DeviceCard {...item} />;
                    }}
                    keyExtractor={v => v.name}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 15,
        marginTop: 28,
    },
    addDevice: {
        paddingHorizontal: 5,
        paddingVertical: 12,
    },
});

export default Home;
