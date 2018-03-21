import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'react-native';
import { Button } from 'native-base';


export default class Welcome extends React.Component {

  goToOverview = () => {
    this.props.navigation.navigate('Overview');
  }

  render() {
    return (
      <View style={styles.container}>
       <View style={styles.imageContainer}><Image source={require('../img/agerley.png')} /></View>
        <Text style={styles.heading}>Welcome, my student!</Text>
        <Text style={styles.paragraph}>I had to leave for vacations for some days. Can you take over my office?</Text>
        
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Button dark onPress={this.goToOverview}>
            <Text style={styles.button}>SURE!</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE6E7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  heading: {
    fontSize: 38,
    fontWeight: '800',
    textAlign: 'center'
  },
  paragraph: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center'
  },
  button: {
    fontSize: 18,
    fontWeight: '800',
    color: 'white',
    padding: 10
  },
});
