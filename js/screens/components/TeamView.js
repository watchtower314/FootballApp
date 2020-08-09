import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { home, teamDetails } from '../styling';
import PropTypes from 'prop-types';

export const TeamView = ({teamInfo, navigation}) => (
	<TouchableOpacity style = {home.teamViewTouchable}
		onPress = {() => navigation.navigate('Team Details', { team: teamInfo })} >
		<Text style = {teamDetails.teamName} >{teamInfo.name}</Text>
	</TouchableOpacity>
);

TeamView.propTypes = {
	teamInfo: PropTypes.object,
	navigation: PropTypes.object
};
