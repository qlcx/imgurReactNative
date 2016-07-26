import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actionFetchData from '../actions/actionFetchData';
import TopBar from '../components/topBar';
import RenderPage from './renderPage';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

class Home extends Component {
	render() {
		const { actionFetchData, state } = this.props;
		let actions = Object.assign({}, actionFetchData);

		return(
			<View style={styles.container}>
				<TopBar {...actions} topics={state.topics} />
				
			</View>
		);
	}	
}

export default connect(
	state => ({
		state: state.GetTopics,
	}),
	dispatch => ({
		actionFetchData: bindActionCreators(actionFetchData, dispatch),
	})
)(Home);