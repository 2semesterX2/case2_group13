import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import { Button } from 'native-base';

import './global.js';

import Welcome from './screens/Welcome.js';
import Overview from './screens/Overview.js';
import Evaluation from './screens/Evaluation.js';

import Bones from './screens/bones/Bones.js';
import BonesWin from './screens/bones/BonesWin.js';
import BonesLose from './screens/bones/BonesLose.js';

import Dentist from './screens/dentist/Dentist.js';
import DentistWin from './screens/dentist/DentistWin.js';
import DentistLose from './screens/dentist/DentistLose.js';

class App extends React.Component {

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  proceed = () => {
    this.props.navigation.navigate('Welcome');


  }

  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress={this.proceed} style={styles.imageContainer}>
        <Image style={styles.imageFill} source={require('./img/loader.png')} />
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5EA7D1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  imageFill: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
});

export default StackNavigator({
  Home: {
    screen: App
  },
  Welcome: {
    screen: Welcome
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
  DentistWin: {
    screen: DentistWin
  },
  DentistLose: {
    screen: DentistLose
  },
  Evaluation: {
    screen: Evaluation
  },
},
{
  headerMode: 'none',
  header: null,
  navigationOptions: {
    gesturesEnabled: false,
  }
});