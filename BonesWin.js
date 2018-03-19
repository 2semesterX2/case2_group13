import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import navStyles from './styles/navStyles';

export default class BonesWin extends Component {
    static navigationOptions = {
      ...navStyles
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.heading}>Good job!</Text>
                
                <Text style={styles.paragraph}>Thanks to the X-ray technology, you’ve been able to put the bones in order. But how does the X-ray works, anyway?</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFE6E7',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: 24,
      width: '100%'
    },
    heading: {
      fontSize: 38,
      fontWeight: '800',
      marginTop: 24
    },
    paragraph: {
      fontSize: 18,
      marginTop: 5,
      marginBottom: 10,
    },
    button: {
      fontSize: 18,
      fontWeight: '600',
      backgroundColor: '#000',
      color: '#fff',
      padding: 2,
      marginTop: 10,
      marginBottom: 10,
    }
  });