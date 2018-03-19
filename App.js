import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import navStyles from './styles/navStyles';
import { StatusBar } from 'react-native';

import Overview from './Overview.js';

import Bones from './Bones.js';
import BonesWin from './BonesWin.js';
import BonesLose from './BonesLose.js';

class App extends React.Component {
  static navigationOptions = {
    ...navStyles
  }

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
        <Button
          color='#000'
          title='Sure!'
          onPress={this.goToOverview}
        />
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
    fontWeight: '600',
    backgroundColor: '#000',
    color: '#fff',
    padding: 2,
    marginTop: 10,
    marginBottom: 10,
  }
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
});