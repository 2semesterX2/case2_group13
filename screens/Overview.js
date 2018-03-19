import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class Overview extends Component {

    goToGame = () => {
        this.props.navigation.navigate('Bones');
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.heading}>Your patients are waiting...</Text>
                <View style={styles.scoreBox}>
                    <View style={styles.row}>
                        <TouchableOpacity onPress={this.goToGame}><Image source={require('../img/patient_waiting.png')} /></TouchableOpacity>
                        <Image source={require('../img/patient_waiting.png')} />
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../img/patient_waiting.png')} />
                        <Image source={require('../img/patient_waiting.png')} />
                    </View>
                    <View style={styles.row}>
                        <Image source={require('../img/patient_waiting.png')} />
                        <Image source={require('../img/patient_waiting.png')} />
                    </View>
                </View>
                <Text style={styles.paragraph}>Click a patient and start healing.</Text>
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
    scoreBox: {
        flex: 1,
        height: '60%',
        justifyContent: 'space-around'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 0,
    },
    imageContainer: {
      padding: 0,
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