import * as React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default function singInScreen(){
    return(
        <View style={styles.container}>
            <Text>Iniciosesion</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });