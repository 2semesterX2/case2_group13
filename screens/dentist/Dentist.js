import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import Timebar from '../../components/Timebar';

export default class Dentist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            right: 0,
            wrong: 0,
            active: true
        };
    }

    componentDidMount() {

        const gameOver = setTimeout(() => {

            if (this.state.active) this.props.navigation.navigate('DentistLose');

        }, 10000);
    }

    componentDidUpdate() {

        if (right === 3 && this.state.active) {
            this.setState({active: false});
            this.props.navigation.navigate('DentistWin');
        }

    }

    
    rightClick = () => {

        
    }


    render() {
        return(
            <View style={styles.app}>
                <Timebar style={styles.timebar}>
                    <Image style={styles.backgroundRepeat} source={require('../../img/timebar_dentist.png')} />
                </Timebar>
                <View style={styles.container}> 
                    <Text style={styles.heading}>Knock out all the broken teeth!</Text>
                    <View style={styles.mouthWrapper}>
                        <Image style={styles.mouthBackground} source={require('../../img/mouth.png')} />

                        <TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                 </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    app: {
        flex:1,
        alignItems: 'stretch',
        backgroundColor: '#292929',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      width: '100%'
    },
    backgroundRepeat: {
        flex:1,
        width: '100%',
        resizeMode: 'repeat',
    },
    heading: {
      fontSize: 38,
      fontWeight: '800',
      marginTop: 24,
      color: 'white'
    },
    mouthWrapper: {

    },
    mouthBackground: {

    }
  });