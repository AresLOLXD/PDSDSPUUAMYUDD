import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PrimaryOutlinedButton from './primaryOutlinedButton';
import PrimaryButton from './primaryButton';

function DeviceCard({name, battery, connected}) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{name}</Text>
                <Icon
                    name={
                        connected ? 'bluetooth-connected' : 'bluetooth-disabled'
                    }
                    style={
                        connected
                            ? styles.iconConnectionConnected
                            : styles.iconConnection
                    }
                />
                <View style={styles.batteryContainer}>
                    <Text style={styles.batteryText}>
                        {connected ? battery + ' %' : '- %'}
                    </Text>
                    <Icon
                        name={connected ? 'battery-full' : 'battery-alert'}
                        style={
                            connected
                                ? styles.iconBatteryConnected
                                : styles.iconBattery
                        }
                    />
                </View>
            </View>
            <View style={styles.actions}>
                <View style={styles.spacing}>
                    <PrimaryOutlinedButton
                        content={'Deshabilitar'}
                        disabled={!connected}
                    />
                </View>
                <View style={styles.spacing}>
                    <PrimaryButton
                        content={'Configuración'}
                        disabled={!connected}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.outline,
        marginVertical: 8,
        paddingBottom: 24,
    },
    iconConnectionConnected: {
        fontSize: 24,
        color: colors.primary,
        marginHorizontal: 4,
    },
    iconConnection: {
        fontSize: 24,
        color: colors.variant1,
        marginHorizontal: 4,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        flexGrow: 1,
        color: colors.onBackground,
        fontSize: 16,
        fontWeight: 'bold',
    },
    batteryContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: '#900',
        marginLeft: 4,
    },
    batteryText: {
        color: colors.tertiary,
        fontWeight: 'bold',
        fontSize: 11,
    },
    iconBatteryConnected: {
        fontSize: 24,
        color: colors.tertiary,
        marginHorizontal: 4,
        transform: [{rotate: '-90deg'}],
    },
    iconBattery: {
        fontSize: 24,
        color: colors.variant1,
        marginHorizontal: 4,
        transform: [{rotate: '-90deg'}],
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'center',
        paddingTop: 24,
    },
    spacing: {
        paddingHorizontal: 4,
    }
});

export default DeviceCard;
