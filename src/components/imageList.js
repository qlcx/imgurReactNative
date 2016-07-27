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

import * as types from '../actions/actionsConstant';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  listview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'red'
  },

  imageContainer: {
    width: width/2,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  }
});

export default class ImageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    }
  }

  componentWillMount() {
    const { getsData, topBarSta } = this.props;
    if(topBarSta){
      getsData('topics/' + topBarSta.id, types.GET_IMAGES);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.topBarSta && this.topBarSta_cpy != nextProps.topBarSta) {
      nextProps.getsData('topics/' + nextProps.topBarSta.id, types.GET_IMAGES);
    }
    if(nextProps.images && this.images_cpy != nextProps.images) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.images),
      });
    }

    this.images_cpy = nextProps.images;
    this.topBarSta_cpy = nextProps.topBarSta;
  }

  _renderData(rowData: string, sectionID: number, rowID: number) {
    if (rowID < 20) {
      let imageID = rowData.cover ? rowData.cover : rowData.id;
      let imageWidth = rowData.cover_width ? rowData.cover_width : rowData.width;
      let imageHeight = rowData.cover_height ? rowData.cover_height : rowData.height;

      let imgContainer_w = width/2.2;
      let imgContainer_h = imageHeight / imageWidth * imgContainer_w;
      if(imageID == 'dPrJE8A') {
        console.log(rowData)
      } 

      return(
        <Image 
          resizeMode="contain"
          backgroundColor= 'red' 
          style={{
            width: imgContainer_w, 
            height: imgContainer_h, 
            //position: 'absolute',
          }}
          source={{uri: 'http://i.imgur.com/' + imageID + 'h.jpg'}} >
          <Text style={{position: 'relative'}}>{imageID}</Text>
        </Image>
      );
    } else {
      return(<View />);
    }
  }

  render() {
    return(
      <ListView
        contentContainerStyle={styles.listview} 
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={this._renderData.bind(this)} />
    );
  }
}