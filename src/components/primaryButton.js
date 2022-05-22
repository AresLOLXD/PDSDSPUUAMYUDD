import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PrimaryButton = ({content, icon, onPress, centered, disabled}) => {
    const [pressed, setPressed] = useState(false);

    return (
        <Pressable
            onPress={onPress}
            onPressIn={e => {
                setPressed(true);
            }}
            onPressOut={e => setPressed(false)}
            disabled={disabled}>
            <View
                style={
                    disabled
                        ? styles.containerDisabled
                        : centered
                        ? pressed
                            ? styles.containerCenteredPressed
                            : styles.containerCentered
                        : pressed
                        ? styles.containerPressed
                        : styles.container
                }>
                {icon && <Icon name={icon} style={styles.icon} />}
                <Text style={disabled ? styles.textDisabled : styles.text}>
                    {content}
                </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    containerDisabled: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: colors.disabled,
        borderRadius: 100,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: colors.primary,
        borderRadius: 100,
    },
    containerPressed: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: '#004E61',
        borderRadius: 100,
    },
    containerCentered: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 24,
        backgroundColor: colors.secondaryContainer,
        borderRadius: 100,
    },
    containerCenteredPressed: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 24,
        backgroundColor: colors.secondaryContainerPressed,
        borderRadius: 100,
    },
    icon: {
        paddingRight: 8,
        fontSize: 24,
        color: colors.onSecondaryContainer,
    },
    text: {
        color: colors.onPrimaryContainer,
        fontWeight: 'bold',
    },
    textDisabled: {
        color: colors.variant1,
        fontWeight: 'bold',
    },
});

export default PrimaryButton;
