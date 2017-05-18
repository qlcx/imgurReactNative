import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
} from 'react-native'

const HEADER_HEIGHT = 60

export default class Home extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      _animatedVal: new Animated.Value(0)
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    return {
      title: 'My Title',
      headerStyle: {
        position: 'absolute', 
        zIndex: 100, 
        top: 0, 
        left: 0, 
        right: 0,
        height: HEADER_HEIGHT,
        transform: [{
          translateY: (!state.params ? 0 : state.params.animatedVal)
        }],
      },
    }
  }

  componentWillMount() {
    this.props.navigation.setParams({
      animatedVal: this.state._animatedVal.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [0, -HEADER_HEIGHT],
        extrapolate: 'clamp'
      })
    })
  }

  render() {
    return (
      <Animated.ScrollView
        onScroll={ 
          Animated.event([{
            nativeEvent: {contentOffset: {y: this.state._animatedVal}}
          }]) 
        }>
        <View style={{ height: HEADER_HEIGHT }}/>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
        <Text>5</Text>
        <Text>6</Text>
        <Text>7</Text>
        <Text>8</Text>
        <Text>9</Text>
        <Text>10</Text>
        <Text>11</Text>
        <Text>12</Text>
        <Text>13</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
        <Text>asdfasdf</Text>
      </Animated.ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    padding: 10,
    zIndex: 1,
  },
  block: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
});