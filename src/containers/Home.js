import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Navigator,
} from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actionFetchData from '../actions/actionFetchData';
import TopBar from '../components/topBar';
import RenderPage from './renderPage';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
	},
});

class Home extends Component {
	render() {
		const { actionFetchData, state } = this.props;
		let actions = Object.assign({}, actionFetchData);

		return(
			<View style={styles.container}>
				<TopBar 
					{...actions}
					topics={state.topics} 
					topBarSta={state.topBarSta}
					status={state.status} />
				<Navigator 
					initialRoute={{name: 'RenderPage', component: RenderPage}}
					configureScene={() => Navigator.SceneConfigs.VerticalDownSwipeJump}
					renderScene={(route, navigator) => {
						let Component = route.component;
						return(
							<Component navigator={navigator} />
						);
					}}/>
			</View>
		);
	}	
}

export default connect(
	state => ({
		state: state.Topics,
	}),
	dispatch => ({
		actionFetchData: bindActionCreators(actionFetchData, dispatch),
	})
)(Home);