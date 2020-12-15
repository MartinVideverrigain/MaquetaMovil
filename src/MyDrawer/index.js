import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './rootNavigation';
import { FontAwesome } from '@expo/vector-icons';
import { iconItemMenuColor } from '../Styles/colorsStyle';

import homeScreen from '../Screen/homeScreen';
import secondScreen from '../Screen/secondScreen';

import styles from '../Styles/drawerStyles';

function DrawerMenu(props) {
    return (
        <TouchableOpacity onPress={props.navigation}>
            <view style={styles.itemMenu}>
                <view style={styles.iconItemMenu}>
                    <FontAwesome size={22} name={props.iconName} color={iconItemMenuColor} />
                </view>
                <view style={styles.titleItemMenu}>
                    <Text style={styles.titleTextItemMenu}>{props.titleName}</Text>
                </view>
            </view>
        </TouchableOpacity>
    );
}

function Menu(props) {
    return (
        <View style={styles.menuContainer}>
            <View style={styles.userContainer}>
                <View style={styles.imageUserContainer}>
                    <Image style={styles.imageUser} source={require('../../assets/favicon.png')} />
                </View>
                <View style={styles.nameUserContainer}>
                    <Text style={styles.userName}>{'nombreusuario'}</Text>
                </View>
                <DrawerMenu iconName='home' titleName='Inicio' navigation={() => props.navigation.navigate('Home')} />
                <DrawerMenu iconName='list-alt' titleName='Segunda' navigation={() => props.navigation.navigate('Second')} />
            </View>
        </View>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
            <Drawer.Screen name="Home" component={homeScreen} />
            <Drawer.Screen name="Second" component={secondScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
}

export default MyDrawer;