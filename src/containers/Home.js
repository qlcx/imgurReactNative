import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	ListView,
	Dimensions,
} from 'react-native';

import Icons from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	topBar: {
		height: height / 10,
		width: width,
		flexDirection: 'row',
		backgroundColor: '#2b2b2b',
		alignItems: 'center',
	}
});

export default class Home extends Component {
	render() {
		console.log(height+ width)
		return(
			<View style={styles.container}>
				<View style={styles.topBar}>
				  <Icons name="chevron-down" size={15} color="#fff" />
					<Icons name="user" size={20} color="#C5C0C7" />
					<Icons name="search" size={20} color="#C5C0C7" />
					<Icons name="align-left" size={20} color="#C5C0C7" />
				</View>
			</View>
		);
	}	
}