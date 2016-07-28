import React, { Component } from 'react';
import { 
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ListView,
  Dimensions,
} from 'react-native';

import RenderPage from '../containers/renderPage';

const { height, width } = Dimensions.get('window');
const SPACE = 8;

const styles = StyleSheet.create({
  listview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  topicContainer: {
    width: (width - 3 * SPACE) / 2, 
    height: (width - 3 * SPACE) / 2, 
    backgroundColor: '#222222',
    marginLeft: SPACE,
    marginTop:  SPACE,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  topicName: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  topicDescription: {
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
    marginTop: 8,
  }

})

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

  }

  _renderData(rowData: string, sectionID: number, rowID: number) {
    return(
      <TouchableOpacity
        style={styles.topicContainer}
        onPress={() => {this._onPress(rowData)}>
          <Text style={styles.topicName}>{rowData.name}</Text>
          <Text style={styles.topicDescription}>{rowData.description}</Text>
      </TouchableOpacity>
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