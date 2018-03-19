import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Animated, Text, View } from 'react-native';

export default class Timebar extends React.Component {
  state = {
    done: false,
    fadeAnim: new Animated.Value(Dimensions.get('window').width),  // Initial value for opacity: 0
  }

  componentDidMount() {

    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 10000,              // Make it take a while
      }
    ).start();                        // Starts the animation

  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          width: fadeAnim,
          height: 18         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}