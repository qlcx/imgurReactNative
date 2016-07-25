import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

import TopBar from '../components/topBar';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default class Home extends Component {
	render() {
		return(
			<View style={styles.container}>
				<TopBar />
			</View>
		);
	}	
}