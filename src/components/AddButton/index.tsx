import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Icon from './Icon';
import { primaryColor } from '../constants';

function AddButton(props) {
	return (
		<TouchableWithoutFeedback onPress={props.addBook}>
			<View style={styles.view}>
				<Icon {...styles.icon} />
			</View>
		</TouchableWithoutFeedback>
	);
}

export default connect(
	null,
	actions
)(AddButton);
