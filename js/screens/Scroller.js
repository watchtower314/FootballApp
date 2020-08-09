import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { teamDetails } from './styling';
import { matchObject } from '../Cortex';

const TextStyled = ({text}) => <Text style = {teamDetails.flatListText}>{text}</Text>;

const Match = ({match}) => (
	<View style = {teamDetails.matchView} >
		{match.map((entry, i) =>
			<TextStyled key = {i} text = {`${Object.keys(entry)}: ${Object.values(entry)}`} />)}
	</View>
);

const Player = ({name}) => <TextStyled text = {name} />;

export const Scroller = ({data, title, id}) => (
	<View style = {teamDetails.scroller} >
		<Text style = {teamDetails.titleText} >{title}</Text>
		<View style = {teamDetails.flatList} >
			{data && data.length !== 0 ? <FlatList data = {data}
				renderItem = {({item}) => (
					title === 'Team Members'
						? <Player key = {item.id} name = {item.name} />
						: <Match key = {item.id} match = {matchObject(item, id)} /> )}
				keyExtractor={item => `${item.id}`} />
				: <TextStyled text = {`No ${title} `} /> }
		</View>
	</View>
);