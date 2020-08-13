
export const fetchData = url =>
{
	return fetch(url,
		{headers: {'X-Auth-Token': 'dae55d4d4a7f4f369e3dad989b77ca65'}})
		.then(resp => resp.json())
		.then(respJson => respJson)
		.catch(err =>
		{
			console.log(err);
			return err;
		});
};

export const getTeams = async url =>
{
	const teams = await fetchData(url);
	return teamObject(teams);
};

export const getPlayers = async url =>
{
	const {squad} = await fetchData(url);
	return squad.map(player);
};

export const getMatches = async (url, id) =>
{
	const {matches} = await fetchData(url);
	return matches.map(m => match(m, id));
};

const teamObject = (respJson) => ({
	teams: respJson.teams.map(team)
});

const team = data => ({
	id: data.id,
	name: data.name,
	crest: data.crestUrl
});

const player = data => ({
	id: data.id,
	name: data.name
});

const match = (data, id) => (
	[
		{Rival: data.awayTeam.id !== id ? data.awayTeam.name : data.homeTeam.name},
		{Date: data.utcDate},
		{Competition: data.competition.name}
	]
);
