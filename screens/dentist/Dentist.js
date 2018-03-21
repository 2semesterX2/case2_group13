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

        if (this.state.right === 6 && this.state.active) {
            this.setState({active: false});
            this.props.navigation.navigate('DentistWin');
        }
        if (this.state.wrong === 2 && this.state.active) {
            this.setState({active: false});
            this.props.navigation.navigate('DentistLose');
        }

    }

    
    rightClick = () => {
        this.setState({right: this.state.right+1});
        console.log(this.state.right)
        
    }

    wrongClick = () => {
        this.setState({wrong: this.state.wrong+1});
        console.log(this.state.wrong)

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

                        <View style={styles.upperJaw}>
                            <TouchableOpacity value="boom" onPress={this.rightClick} style={styles.toothWrapper}><Image style={styles.toothImage} source={require('../../img/teeth_broken1.png')} /></TouchableOpacity>
                            <TouchableOpacity onPress={this.wrongClick} style={styles.toothWrapper}><Image style={styles.toothImage} source={require('../../img/teeth.png')} /></TouchableOpacity>
                            <TouchableOpacity onPress={this.wrongClick} style={styles.toothWrapper}><Image style={styles.toothImage} source={require('../../img/teeth.png')} /></TouchableOpacity>
                            <TouchableOpacity onPress={this.rightClick} style={styles.toothWrapper}><Image style={styles.toothImage} source={require('../../img/teeth_broken3.png')} /></TouchableOpacity>
                            <TouchableOpacity onPress={this.rightClick} style={styles.toothWrapper}><Image style={styles.toothImage} source={require('../../img/teeth_broken2.png')} /></TouchableOpacity>
                            <TouchableOpacity onPress={this.wrongClick} style={styles.toothWrapper}><Image style={styles.toothImage} source={require('../../img/teeth.png')} /></TouchableOpacity>
                            </View>
                        <View style={styles.lowerJaw}>
                        <TouchableOpacity onPress={this.wrongClick} style={styles.toothWrapper}><Image style={styles.toothImage} source={require('../../img/teeth_lower.png')} /></TouchableOpacity>
                        <TouchableOpacity onPress={this.rightClick} style={styles.toothWrapper}><Image style={styles.toothImage} source={require('../../img/teeth_lower_broken3.png')} /></TouchableOpacity>
                        <TouchableOpacity onPress={this.rightClick} style={styles.toothWrapper}><Image style={styles.toothImage} source={require('../../img/teeth_lower_broken2.png')} /></TouchableOpacity>
                        <TouchableOpacity onPress={this.wrongClick} style={styles.toothWrapper}><Image style={styles.toothImage} source={require('../../img/teeth_lower.png')} /></TouchableOpacity>
                        <TouchableOpacity onPress={this.rightClick} style={styles.toothWrapper}><Image style={styles.toothImage} source={require('../../img/teeth_lower_broken1.png')} /></TouchableOpacity>
                        <TouchableOpacity onPress={this.wrongClick} style={styles.toothWrapper}><Image style={styles.toothImage} source={require('../../img/teeth_lower.png')} /></TouchableOpacity>
                             </View>
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
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: 246
    },
    mouthBackground: {
        flex:1,
        width: '100%',
        resizeMode: 'contain',
    },
    upperJaw: {
        position: 'absolute',
        top: 133,
        left: 20,
        flex:1,
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'space-around'
    },
    lowerJaw: {
        position: 'absolute',
        top: 182,
        left: 20,
        flex:1,
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'space-around'
    },
    toothWrapper: {
        width: 40,
        height: 40,

    },
    toothImage: {
        flex:1,
        width: '100%',
        resizeMode: 'contain',
    }
  });