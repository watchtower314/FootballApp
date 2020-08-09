import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { home } from './styling';
import { fetchData } from '../Cortex';
import { TeamView } from './components/TeamView';

export default class Home extends Component
{

	constructor (props)
	{
		super(props);
		this.state = { teams: [] };
	}

	componentDidMount()
	{
		this.loadTeams();
	}

	loadTeams = async () =>
	{
		const CL = await fetchData('https://api.football-data.org/v2/competitions/CL/teams');
		this.setState({ teams: CL.teams });
	}

	render()
	{
		return (<View style = {home.containerView}>
			<FlatList data = {this.state.teams}
				renderItem = {({item, i}) => (
					<TeamView key = {`${i}`} teamInfo = {item} navigation = {this.props.navigation} />)}
				keyExtractor={item => item.name} />
		</View>);
	}
}
