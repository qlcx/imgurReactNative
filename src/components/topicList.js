import React, { Component } from 'react';
import { 
  View,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  ListView,
  Dimensions,
} from 'react-native';

import RenderPage from '../containers/renderPage';

const { height, width } = Dimensions.get('window');
const SPACE = 8;
const TOPIC_CONTAINER_SIZE = (width - 3 * SPACE) / 2;

const styles = StyleSheet.create({
  listview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  topicContainer: {
    width: TOPIC_CONTAINER_SIZE, 
    height: TOPIC_CONTAINER_SIZE, 
    marginLeft: SPACE,
    marginTop:  SPACE,
  },

  topicName: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '900',
    color: '#fff',
    position: 'relative',
  },
  topicDescription: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 6,
    position: 'relative',
  },
  topicInfoContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    height: TOPIC_CONTAINER_SIZE,
    width: TOPIC_CONTAINER_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default class TopicList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    };

    this._onPress = this._onPress.bind(this);
  }

  componentWillMount() {
    const { topicsData } = this.props;

    if(topicsData) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(topicsData),
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.status) {
      nextProps.navigator.pop()
    }
  }

  _onPress(topicInfo) {
    const { setTopBarStatus, navigator } = this.props;
    setTopBarStatus(false, topicInfo, true);

    navigator.popToTop();
  }

  _renderData(rowData: string, sectionID: number, rowID: number) {
    //取得顶部image ID
    let imageID = null;
    if(rowData.topPost) {
      imageID = rowData.topPost.cover ? rowData.topPost.cover : rowData.topPost.id;
    }

    return(
      <TouchableHighlight
        style={styles.topicContainer}
        underlayColor='#fff'
        activeOpacity= {.8}
        onPress={() => {this._onPress(rowData)}}>
          <Image
            resizeMode="cover"
            style={{
              height: TOPIC_CONTAINER_SIZE,
              width: TOPIC_CONTAINER_SIZE,
            }}
            source={{uri: 'http://i.imgur.com/' + imageID + 'h.jpg'}} >
          <View 
            style={styles.topicInfoContainer}>
            <Text style={styles.topicName}>{rowData.name}</Text>
            <Text style={styles.topicDescription}>{rowData.description}</Text>
          </View>
          </Image>
      </TouchableHighlight>
    );
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