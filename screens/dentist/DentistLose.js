import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';

export default class DentistLose extends Component {

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
            <View style={styles.app}>
                <View style={styles.container}>
                    <Text style={styles.heading}>Oh no!</Text>
                    
                    <Text style={styles.paragraph}>You should not do dentist operations with your fingers. Lucily, we use electrical drill nowadays. Do you know, when it was invented?</Text>
                    
                    <Button block dark onPress={this.rightAnswer}>
                        <Text style={styles.button}>1875</Text>
                    </Button>
                    <View style={{height: 10, width: '100%'}} />
                    <Button block dark onPress={this.wrongAnswer}>
                        <Text style={styles.button}>1914</Text>
                    </Button>
                    <Text style={styles.paragraph}>Find the answer in the museum</Text>
                </View>
                <View>
                    <Image source={require('../../img/hand.png')} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    app: {
        flex:1,
        alignItems: 'center',
    },
    container: {
      flex: 1,
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
      fontWeight: '800',
      color: 'white',
      padding: 10
    },
  });