import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../actions/actions';
import TopBar from '../components/topBar';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

class Home extends Component {
	render() {
		const { actions } = this.props;
		return(
			<View style={styles.container}>
				<TopBar {...actions} />
			</View>
		);
	}	
}

export default connect(
	state => ({
		counter: state.GetTopics
	}),
	dispatch => ({
		actions: bindActionCreators(actions, dispatch),
	})
)(Home);