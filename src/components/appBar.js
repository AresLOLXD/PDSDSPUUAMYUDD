import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../styles/colors';

const AppBar = ({title, leftIcon, onLeftIconPress}) => {
    return (
        <View style={styles.container}>
            {leftIcon && (
                <Pressable onPress={onLeftIconPress}>
                    <Icon
                        name={leftIcon}
                        color={colors.onBackground}
                        size={24}
                    />
                </Pressable>
            )}
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: colors.onBackground,
        flexGrow: 1,
        justifyContent: 'center',
        fontSize: 22,
        textAlign: 'center',
    },
    icon: {

    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 18,
        paddingBottom: 18,
        paddingHorizontal: 12,
    },
});

export default AppBar;
