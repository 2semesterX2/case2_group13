import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import {Button} from 'native-base';

export default class Evaluation extends Component {

    share = () => {
        console.log('share')
    }

    render() {
        const total = global.patients.length

        let title = '';
        let badge = '';
        color = '#FFFFFF';
        let score = 0;
        global.patients.forEach((patient) => {
            if (patient === 'healed') score++;
        })

        if (score < (total - 2)) {
            title = 'DELIRIOUS DOCTOR'
            badge = require('../img/badge_doctor.png');
            color = '#00E0FF'
        } else if (score < (total - 1)) {
            title = 'DAFT DENTIST'
            badge = require('../img/badge_dentist.png');
            color = '#F2C94C'
        } else if (score < total) {
            title = 'X-RAY X-PERT'
            badge = require('../img/badge_expert.png');
            color = '#42FF91'
        } else {
            title = 'SEXY SURGEON'
            badge = require('../img/badge_surgeon.png');
            color = '#F79EEE'
        }

        return(
            <View style={styles.container}>
                <Text style={styles.heading}>
                    <Text style={{color: color}}>{title}</Text>
                </Text>
                <View style={styles.imageContainer}><Image source={badge}/></View>
                <Text style={styles.finalScore}>
                    {`${score}/${total} PATIENTS SAVED`}
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Button light onPress={this.share}>
                        <Text style={styles.button}>SHARE!</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333333',
      alignItems: 'center',
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
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: -70,
      marginBottom: -70
    },
    heading: {
      fontSize: 38,
      fontWeight: '800',
      marginTop: 24,
      textAlign: 'center'
    },
    finalScore: {
      fontSize: 24,
      fontWeight: '800',
      marginBottom: 10,
      color: '#fff',
    },
    button: {
      fontSize: 18,
      fontWeight: '800',
      padding: 10,
    },
  });