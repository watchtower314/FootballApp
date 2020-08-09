
export const fetchData = url =>
{
	return fetch(url,
		{headers: {'X-Auth-Token': 'dae55d4d4a7f4f369e3dad989b77ca65'}})
		.then(resp => resp.json())
		.then(respJson =>
		{
			return respJson;
		})
		.catch(err =>
		{
			console.log(err);
			return err;
		});
};


export const matchObject = (matchObj, teamId) =>
{
	const match = [
		{ Rival: matchObj.awayTeam.id !== teamId ? matchObj.awayTeam.name : matchObj.homeTeam.name },
		{ Date: matchObj.utcDate },
		{ Competition: matchObj.competition.name }
	];
	return match;
};