import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';

export default class DentistWin extends Component {

    rightAnswer = () => {
        global.patients[global.currentPatient] = 'healed';
        global.currentPatient++;
        this.props.navigation.navigate('Overview');
    }

    wrongAnswer = () => {
        global.patients[global.currentPatient] = 'dead';
        global.currentPatient++;
        this.props.navigation.navigate('Overview');
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.heading}>Good job!</Text>
                
                <Text style={styles.paragraph}>Since the generation born in the 70s, people live their whole lives with their teeth. Do you know what was this first generation called?</Text>
                
                <Button block light onPress={this.wrongAnswer}>
                    <Text style={styles.button}>HUNDRED-TEETH GEN.</Text>
                </Button>
                <View style={{height: 10, width: '100%'}} />
                <Button block light onPress={this.rightAnswer}>
                    <Text style={styles.button}>ZERO-HOLES GEN.</Text>
                </Button>
                <Text style={styles.paragraph}>Find the answer in the museum</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#171628',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: 24,
      width: '100%'
    },
    heading: {
      fontSize: 38,
      fontWeight: '800',
      marginTop: 24,
      color: 'white'
    },
    paragraph: {
      fontSize: 18,
      marginTop: 5,
      marginBottom: 10,
      color: 'white'
    },
    button: {
      fontSize: 18,
      fontWeight: '800',
      color: 'black',
      padding: 10
    },
  });