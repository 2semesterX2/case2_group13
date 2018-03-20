import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import { Button } from 'native-base';

import './global.js';

import Overview from './screens/Overview.js';

import Bones from './screens/bones/Bones.js';
import BonesWin from './screens/bones/BonesWin.js';
import BonesLose from './screens/bones/BonesLose.js';

import Dentist from './screens/dentist/Dentist.js';

class App extends React.Component {

  goToOverview = () => {
    this.props.navigation.navigate('Overview');
  }

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <View style={styles.container}>
       <View style={styles.imageContainer}><Image source={require('./img/agerley.png')} /></View>
        <Text style={styles.heading}>Welcome, my student!</Text>
        <Text style={styles.paragraph}>I had to leave for vacations for some days. Can you take over my office?</Text>
        <Button dark onPress={this.goToOverview}>
          <Text style={styles.button}>SURE!</Text>
        </Button>
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
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  heading: {
    fontSize: 38,
    fontWeight: '800',
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

export default StackNavigator({
  Home: {
    screen: App
  },
  Overview: {
    screen: Overview
  },
  Bones: {
    screen: Bones
  },
  BonesWin: {
    screen: BonesWin
  },
  BonesLose: {
    screen: BonesLose
  },
  Dentist: {
    screen: Dentist
  },
},
{
  headerMode: 'none',
  header: null,
  navigationOptions: {
    gesturesEnabled: false,
  }
});