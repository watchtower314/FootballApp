import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { teamDetails } from '../styling';
import PropTypes from 'prop-types';

const TextStyled = ({text}) => <Text style = {teamDetails.flatListText}>{text}</Text>;

const Match = ({match}) =>  (
	<View style = {teamDetails.matchView} >
		{match.map((entry, i) =>
			<TextStyled key = {i} text = {`${Object.keys(entry)}: ${Object.values(entry)}`} />)}
	</View>
);

const Player = ({name}) => <TextStyled text = {name} />;

export const Scroller = ({data, title}) => (
	<View style = {teamDetails.scroller} >
		<Text style = {teamDetails.titleText} >{title}</Text>
		<View style = {teamDetails.flatList} >
			{data && data.length !== 0
				? <FlatList data = {data}
					renderItem = {({item}, i) => (
						title === 'Team Members'
							? <Player key = {item.id} name = {item.name} />
							: <Match key = {i} match = {item} /> )}
					keyExtractor={(item, i) => `${item.id || i}`} />
				: <TextStyled text = {`No ${title} `} /> }
		</View>
	</View>
);

Scroller.propTypes = {
	data: PropTypes.array,
	title: PropTypes.string,
	id: PropTypes.number
};

Player.propTypes = {
	name: PropTypes.string
};

Match.propTypes = {
	match: PropTypes.array
};

TextStyled.propTypes = {
	text: PropTypes.string
};

