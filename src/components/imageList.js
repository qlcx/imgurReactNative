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
  InteractionManager,
  ActivityIndicator,
} from 'react-native';

import * as types from '../actions/actionsConstant';
import * as IconType from '../constants/icons';
import TopicsContainer from '../containers/topicsContainer';

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

  imageTitle: {
    color: '#fff', 
    fontSize: 14,
    marginLeft: 5,
    marginTop: 5,
    fontWeight: 'bold',
  },

  upCnts: {
    marginLeft: 5,
    marginBottom: 8,
    marginTop: 3,
    flexDirection: 'row',
  }
});

export default class ImageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource1: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      dataSource2: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
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
        dataSource1: this.state.dataSource1.cloneWithRows(nextProps.images),
        dataSource2: this.state.dataSource2.cloneWithRows(nextProps.images),
      });
    }

    if(nextProps.status) {
      nextProps.navigator.push({
        component: TopicsContainer,
      })
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
          <View style={{backgroundColor: '#2b2b2b', width: imgContainer_w}}>
            <Text style={styles.imageTitle} numberOfLines={2}>
              {rowData.title}
            </Text>
            <View style={styles.upCnts}>
              {IconType.ICON_ARROW_UP}
              <Text style={{color: '#C4C4C4', marginLeft: 2, fontSize: 13}}>
                {rowData.ups + ' Points'}
              </Text>
            </View>
          </View>
        </View>
      );
  }

  _renderDataLeft(rowData: string, sectionID: number, rowID: number) {
    if (!(rowID % 2)) {
      return (this._imageDataRender(rowData, rowID));
    } else {
      return null;
    }
  }

  _renderDataRight(rowData: string, sectionID: number, rowID: number) {
    if (rowID % 2) {
      return (this._imageDataRender(rowData, rowID));
    } else {
      return null;
    }
  }

  _renderPlaceholderView() {
    return (
      <View 
        style={{
          flex: 1, 
          backgroundColor: '#000', 
          justifyContent: 'center', 
          alignItems: 'center'
        }}>
        <ActivityIndicator color="#fff" size="large" />
      </View>
    );
  }

  render() {
    const { imgLoading } = this.props;
    if (imgLoading) {
      return this._renderPlaceholderView();
    }

    return(
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ListView
            contentContainerStyle={[styles.listview, {marginLeft: width / 60}]}
            enableEmptySections={true}
            dataSource={this.state.dataSource1}
            renderRow={this._renderDataLeft.bind(this)} />
          <ListView
            contentContainerStyle={[styles.listview, {marginRight: width / 60}]}
            enableEmptySections={true}
            dataSource={this.state.dataSource2}
            renderRow={this._renderDataRight.bind(this)} />
        </View>
      </ScrollView>
    );
  }
}