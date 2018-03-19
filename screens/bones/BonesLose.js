import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import navStyles from '../../styles/navStyles';
import { Button } from 'native-base';

export default class BonesLose extends Component {
    static navigationOptions = {
      ...navStyles
    }

    rightAnswer = () => {
        alert('you are right');
    }
    
    wrongAnswer = () => {
        alert('you are wrong');
    }

    render() {
        return(
            <View style={styles.app}>
                <View style={styles.container}>
                    <Text style={styles.heading}>Oh No!</Text>
                    
                    <Text style={styles.paragraph}>You’ve been exposed to X-ray for too long! Your fingers couldn’t stand the radiation and they fell of. Do you know whom it happened to as well?</Text>
                    <Button block dark onPress={this.wrongAnswer}>
                        <Text style={styles.button}>DR. AGERLEY</Text>
                    </Button>
                    <View style={{height: 10, width: '100%'}} />
                    <Button block dark onPress={this.rightAnswer}>
                        <Text style={styles.button}>DR. RÖNTGEN</Text>
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