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
import TopicsContainer from './topicsContainer';

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
				<Navigator 
					initialRoute={{name: 'RenderPage', component: RenderPage}}
					configureScene={() => Navigator.SceneConfigs.VerticalDownSwipeJump}
					renderScene={(route, navigator) => {
						let Component = route.component;
						return(
							<View>
								<TopBar 
									{...actions}
									navigator={navigator} 
									topics={state.topics} 
									topBarSta={state.topBarSta}
									status={state.status} />
								<Component navigator={navigator} />
							</View>
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