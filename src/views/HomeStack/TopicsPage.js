import React, { Component } from 'react'
import { 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Animated,
  Text,
} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'

const HEADER_HEIGHT = 60

export default class TopicsPage extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      _animatedVal: new Animated.Value(0)
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    return {
      headerLeft: !state.params ? null : state.params.renderHeaderLeft,
      headerStyle: {
        position: 'absolute', 
        zIndex: 100, 
        top: 0, 
        left: 0, 
        right: 0,
        backgroundColor: '#33353d',
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
      }),

      renderHeaderLeft: this.renderHeaderLeft()
    })
  }

  renderHeaderLeft() {
    return <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
      <View style={[{width: 100}, styles.elemCenter]}>
        <Text style={styles.headerBTNName}>home</Text>
        <Icons
          style={styles.headerBTNIcon} 
          name='angle-down' 
          size={16} 
          color='#fff' />
      </View>
    </TouchableOpacity>
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
      </Animated.ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  elemCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerBTNName: {
    color: '#fff',
    fontSize: 16,
  },
  headerBTNIcon: {
    marginLeft: 10,
  }

})