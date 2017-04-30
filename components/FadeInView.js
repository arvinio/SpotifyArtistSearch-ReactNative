import React, { Component } from 'react';
import {
  Animated
} from 'react-native';

export default class FadeInView extends Component {
  constructor(props){
    super(props)
    this.state = {fadeAnim: new Animated.Value(-60)}
  }

  componentDidMount(){
    Animated.timing(
      this.state.fadeAnim,
      {toValue: 2,
        delay: this.props.delay,
        duration: 250
      }
    ).start()
  }

  render(){
    return(
      <Animated.View
        style={{marginLeft: this.state.fadeAnim}} >
        {this.props.children}
      </Animated.View>
    )
  }
}