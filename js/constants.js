export const initialRanking = JSON.stringify([
	{
		team: {
			name: "Australia",
			id: 32,
			pos: 1,
			pts: 54.23
		},
	},
	{
		team: {
			name: "New Zealand",
			id: 62,
			pos: 2,
			pts: 54.00
		},
	},
	{
		team: {
			name: "France",
			id: 2,
			pos: 3,
			pts: 52.95
		},
	},
	{
		team: {
			name: "England",
			id: 1,
			pos: 4,
			pts: 52.32
		},
	},
	{
		team: {
			name: "Romania",
			id: 24,
			pos: 5,
			pts: 43.50
		},
	}
]);

export const franceEnglandMatch = {
	matchId: 2524,
	description: "Match 2",
	venue: {
		id: 900,
		name: "Stadium",
		city: "Paris",
		country: "France"
	},
	teams: [
		{
			id: 2,
			name: "France",
			abbreviation: "FRA"
		},
		{
			id: 1,
			name: "England",
			abbreviation: "ENG"
		}
	],
	scores: [
		19,
		23
	],
	status: "C",
	outcome: "B"
}
