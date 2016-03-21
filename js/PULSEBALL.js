export default class PULSEBALL {
	constructor() {
		this.ranking = {};
	}

	init(rankingsJson) {
		return (this.ranking = JSON.parse(rankingsJson));
	}

	addMatch(match) {
		var first = this.getTeam(match.teams[0].name);
		var second = this.getTeam(match.teams[1].name);

		first.isHome = first.name === match.venue.country;
		second.isHome = second.name === match.venue.country;

		var firstCalcPts = first.pts;
		var secondCalcPts = second.pts;

		if (first.isHome || second.isHome) {
			// if it's not a tournament, give 3 points bonus to an away team
			firstCalcPts += first.isHome * 3;
			secondCalcPts += second.isHome * 3;
		}

		var ptsDelta = parseFloat((Math.max(Math.min(firstCalcPts - secondCalcPts, 10.0), -10.0) / 10.0).toFixed(2));

		if (match.status === 'C') {
			switch (match.outcome) {
				case 'A':
					first.pts = first.pts + 1.0 - ptsDelta;
					second.pts = first.pts + 1.0 - ptsDelta;
					break;

				case 'B':
					first.pts = first.pts - (1.0 + ptsDelta);
					second.pts = second.pts + 1.0 + ptsDelta;
					break;

				case 'D':
					first.pts += ptsDelta;
					second.pts += ptsDelta;
					break;

				case 'N':
					// don't do anything
					break;
			}
		}

		this.sortTeams();
	}

	getTeam(name) {
		return this.ranking.filter(t => t.team.name === name)[0].team;
	}

	sortTeams() {
		this.ranking = this.ranking.sort((a, b) => b.team.pts - a.team.pts);
	}
}
