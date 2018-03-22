import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default class Overview extends Component {

    goToBones = () => {

        const randomGame = global.games[global.currentPatient % global.games.length];

        this.props.navigation.navigate(randomGame);
    }

    componentWillMount() {
        
        if (global.currentPatient === global.patients.length) {
            this.props.navigation.navigate('Evaluation');
        }
    }

    render() {
        let message = 'Your patients are waiting...'

        if (global.patients[global.currentPatient] === 'healed') {
            const toGo = 5 - global.currentPatient;
            message = `Good job! ${toGo} more to go...`;
        }
        if (global.patients[global.currentPatient] === 'dead') {
            message = 'Oopsie! Better luck next time!';
        }

        return(
            <View style={styles.container}>
                <Text style={styles.heading}>
                {message}
                </Text>
                <View style={styles.scoreBox}>
                    
                    <View style={styles.row}>
                    {global.patients.slice(0,2).map((value, index) => {
                        let image = <TouchableOpacity onPress={this.goToBones}><Image source={require('../img/patient_waiting.png')} /></TouchableOpacity>
                        if(value === 'dead') image = <Image source={require('../img/patient_dead.png')} />
                        if(value === 'healed') image = <Image source={require('../img/patient_healed.png')} />

                        let odd = false;
                        if (index % 2 === 1 ) odd = true;

                        return image;
                    })}
                    </View>
                    <View style={styles.row}>
                    {global.patients.slice(2,4).map((value, index) => {
                        let image = <TouchableOpacity onPress={this.goToBones}><Image source={require('../img/patient_waiting.png')} /></TouchableOpacity>
                        if(value === 'dead') image = <Image source={require('../img/patient_dead.png')} />
                        if(value === 'healed') image = <Image source={require('../img/patient_healed.png')} />

                        let odd = false;
                        if (index % 2 === 1 ) odd = true;

                        return image;
                    })}
                    </View>
                    <View style={styles.row}>
                    {global.patients.slice(4,6).map((value, index) => {
                        let image = <TouchableOpacity onPress={this.goToBones}><Image source={require('../img/patient_waiting.png')} /></TouchableOpacity>
                        if(value === 'dead') image = <Image source={require('../img/patient_dead.png')} />
                        if(value === 'healed') image = <Image source={require('../img/patient_healed.png')} />

                        let odd = false;
                        if (index % 2 === 1 ) odd = true;

                        return image;
                    })}
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