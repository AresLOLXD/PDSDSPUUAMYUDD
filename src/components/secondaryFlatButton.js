import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SecondaryFlatButton = ({content, icon, onPress, centered}) => {
    const [pressed, setPressed] = useState(false);

    return (
        <Pressable
            onPress={onPress}
            onPressIn={e => {
                console.log("pressed")
                setPressed(true);
            }}
            onPressOut={e => setPressed(false)}>
            <View
                style={
                    centered
                        ?( pressed
                            ? styles.containerCenteredPressed
                            : styles.containerCentered)
                        : (pressed
                        ? styles.containerPressed
                        : styles.container)
                }>
                {icon && <Icon name={icon} style={styles.icon} />}
                <Text style={styles.text}>{content}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 24,
        backgroundColor: colors.secondaryContainer,
        borderRadius: 100,
    },
    containerPressed: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 24,
        backgroundColor: colors.secondaryContainerPressed,
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
        color: colors.onSecondaryContainer,
        fontWeight: 'bold',
    },
});

export default SecondaryFlatButton;
