import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { fetchData } from '../Cortex';
import { teamDetails } from './styling';
import { Scroller } from './Scroller';

export default class TeamDetails extends Component
{
	constructor (props)
	{
		super(props);
		console.log(props.route.params);
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
		// TODO error handle this
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
			<Image style = {teamDetails.image}
				source = {{uri: this.state.crestUrl}}
				resizeMode = 'cover'/>
			<Text style = {teamDetails.teamName}>{this.state.name}</Text>

			<Scroller data = {this.state.players} title = {'Team Members'}/>

			<Scroller data = {this.state.matches} title = {'Upcoming Matches'} id = {this.state.id}/>

			{ this.state.loading && <View style = {teamDetails.loader} >
				<ActivityIndicator size='large' color='teal' />
			</View>}

		</View>);
	}

}
