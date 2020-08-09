import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { fetchData } from '../Cortex';
import { teamDetails } from './styling';
import { Scroller } from './components/Scroller';
import { Logo } from './components/Logo';

export default class TeamDetails extends Component
{
	constructor (props)
	{
		super(props);
		this.state = {
			...props.route.params.team,
			matches: [],
			loading: true
		};

	}

	componentDidMount ()
	{
		this.loadData();
	}

	loadData = async () =>
	{
		const players = await fetchData(`https://api.football-data.org/v2/teams/${this.state.id}`);
		const matches = await fetchData(`https://api.football-data.org/v2/teams/${this.state.id}/matches?status=SCHEDULED&limit=10`);
		this.setState({
			players: players.squad,
			...matches,
			loading: false
		});
	}

	render ()
	{
		return (<View style = {teamDetails.containerView} >

			<Logo uri = {this.state.crestUrl} />

			<Text style = {teamDetails.teamName}>{this.state.name}</Text>

			<Scroller data = {this.state.players} title = {'Team Members'}/>

			<Scroller data = {this.state.matches} title = {'Upcoming Matches'} id = {this.state.id}/>

			{ this.state.loading && <View style = {teamDetails.loader} >
				<ActivityIndicator size='large' color='teal' />
			</View>}

		</View>);
	}

}
