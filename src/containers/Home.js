import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actionGetImages from '../actions/Action_getImages';
import * as actionGetTopics from '../actions/Action_getTopics';
import TopBar from '../components/topBar';
import RenderPage from './renderPage';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

class Home extends Component {
	render() {
		const { actionGetTopics, actionGetImages, state } = this.props;

		let actions = Object.assign({}, actionGetImages, actionGetTopics);
		return(
			<View style={styles.container}>
				<TopBar {...actions} topics={state.topics} />
				<RenderPage />
			</View>
		);
	}	
}

export default connect(
	state => ({
		state: state.GetTopics,
	}),
	dispatch => ({
		actionGetTopics: bindActionCreators(actionGetTopics, dispatch),
		actionGetImages: bindActionCreators(actionGetImages, dispatch),
	})
)(Home);