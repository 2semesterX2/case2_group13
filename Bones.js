import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import navStyles from './styles/navStyles';

import Draggable from 'react-native-draggable';

import Timebar from './Timebar';

export default class Bones extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bonesPosition: {
                black: [{x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}],
                white: [{x: 0, y: 0}, {x: 0, y: 0}, {x: 0, y: 0}]
            },
            renderNumber: 0
        };
    }

    static navigationOptions = {
      ...navStyles
    }

    componentDidMount() {
        
        
        setTimeout(() => {

            const bonesPosition = {...this.state.bonesPosition};

            this.firstBlack.measure( (fx, fy, width, height, px, py) => {
                bonesPosition.black[0].x = fx - 50;
                bonesPosition.black[0].y = fy - 44;
            });    
            this.secondBlack.measure( (fx, fy, width, height, px, py) => {
                bonesPosition.black[1].x = fx - 70;
                bonesPosition.black[1].y = fy - 85;
            });    
            this.thirdBlack.measure( (fx, fy, width, height, px, py) => {
                bonesPosition.black[2].x = fx - 50;
                bonesPosition.black[2].y = fy - 180;
            });    
            
            this.setState({bonesPosition})

        }, 10)

        setTimeout(() => {

            this.props.navigation.navigate('BonesLose')

        }, 10000);
    }

    componentDidUpdate() {

        let counter = 0;
        bonesPosition = this.state.bonesPosition;

        bonesPosition.black.forEach((element, index) => {

            const whiteX = this.state.bonesPosition.white[index].x;
            const whiteY = bonesPosition.white[index].y;

            const differenceX = element.x - whiteX;
            const differenceY = element.y - whiteY;

            console.log(differenceX);
            console.log(differenceY);

            if (whiteX != 0 &&
                differenceX > -10 &&
                differenceX < 10 &&
                differenceY > -10 &&
                differenceY < 10) {
                    counter ++;
                }
        });

        console.log('score is: ' + counter);

        if (counter === 3) this.props.navigation.navigate('BonesWin');
    }
    
    handleClick = () => {

        const bonesPosition = {...this.state.bonesPosition};

        bonesPosition.white[0].x = this.firstWhite.state._value.x;
        bonesPosition.white[0].y = this.firstWhite.state._value.y;

        bonesPosition.white[1].x = this.secondWhite.state._value.x;
        bonesPosition.white[1].y = this.secondWhite.state._value.y;

        bonesPosition.white[2].x = this.thirdWhite.state._value.x;
        bonesPosition.white[2].y = this.thirdWhite.state._value.y;

        
        this.setState({bonesPosition})
        
    }


    render() {
        return(
            <View style={styles.app}>
                <Timebar style={styles.timebar}>
                    <Image style={styles.backgroundRepeat} source={require('./img/timebar_bones.png')} />
                </Timebar>
                <View style={styles.container}> 
                    <Text style={styles.heading}>Sort out my bones!</Text>
                    <Image ref={self => { this.firstBlack = self; }} source={require('./img/bone1_black.png')} />
                    <Image ref={self => { this.secondBlack = self; }}  source={require('./img/bone2_black.png')} />
                    <Image ref={self => { this.thirdBlack = self; }}  source={require('./img/bone3_black.png')} />
                    
                    <Draggable
                        renderShape='image'
                        imageSource={require('./img/bone1_white.png')}
                        renderSize={80}
                        pressDragRelease={this.handleClick}
                        reverse={false}
                        x={50}
                        y={50}
                        ref={self => { this.firstWhite = self; }}
                    />
                    <Draggable
                        renderShape='image'
                        imageSource={require('./img/bone2_white.png')}
                        renderSize={120}
                        pressDragRelease={this.handleClick}
                        reverse={false}
                        x={50}
                        y={100}
                        ref={self => { this.secondWhite = self; }}
                    />
                    <Draggable
                        renderShape='image'
                        imageSource={require('./img/bone3_white.png')}
                        renderSize={70}
                        pressDragRelease={this.handleClick}
                        reverse={false}
                        x={50}
                        y={190}
                        ref={self => { this.thirdWhite = self; }}
                    />
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
    white1: {
        position: 'absolute',
        top: -300,
        left: -80
    },
    white2: {
        position: 'absolute',
        top: -200,
        left: -80
    },
    white3: {
        position: 'absolute',
        top: -100,
        left: -80
    },
  });