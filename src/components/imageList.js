import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default class ImageList extends Component {
  constructor(props) {
    super(props);
  }

/*
  componentWillMount() {
    const { getImgurImage,  ImageInfo} = this.state;
    ImageInfo.Images.map()
  }
*/

  render() {
    const { ImageInfo } = this.props;


    return(
      <View style={styles.container}>
      {ImageInfo.map((data) => {
         return(
           <Image src={{uri: 'http://i.imgur.com/' + data.id + 'h.jpg'}} style={{width: width / 3}}/>
         );
       })}
      </View>
    );
  }
}