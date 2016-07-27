import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import * as types from '../actions/actionsConstant';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#000'
  },

  listview: {
    marginTop: 5,
    alignItems: 'center',
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

  _imageDataRender(rowData, rowID) {
      let imageID = rowData.cover ? rowData.cover : rowData.id;
      let imageWidth = rowData.cover_width ? rowData.cover_width : rowData.width;
      let imageHeight = rowData.cover_height ? rowData.cover_height : rowData.height;

      let imgContainer_w = width / 2.2;
      let imgContainer_h = imageHeight / imageWidth * imgContainer_w;

      return(
        <View style={{marginVertical: 3}}>
          <Image 
            resizeMode="contain"
            style={{
              width: imgContainer_w, 
              height: imgContainer_h,
            }}
            source={{uri: 'http://i.imgur.com/' + imageID + 'h.jpg'}} >
            <Text style={{position: 'relative', color: '#fff'}}>{imageID}</Text>
          </Image>
        </View>
      );
  }

  _renderDataLeft(rowData: string, sectionID: number, rowID: number) {
    if (rowID % 2 === 0) {
      return (this._imageDataRender(rowData, rowID));
    } else {
      return(<View />);
    }
  }

  _renderDataRight(rowData: string, sectionID: number, rowID: number) {
    if (rowID % 2) {
      return (this._imageDataRender(rowData, rowID));
    } else {
      return(<View />);
    }
  }

  render() {
    return(
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ListView
            contentContainerStyle={[styles.listview, {marginLeft: width / 60}]}
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={this._renderDataLeft.bind(this)} />
          <ListView
            contentContainerStyle={[styles.listview, {marginRight: width / 60}]}
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={this._renderDataRight.bind(this)} />
        </View>
      </ScrollView>
    );
  }
}