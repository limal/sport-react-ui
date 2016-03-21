export default class PULSEBALL {
	constructor() {
		this.ranking = {};
	}

	init(rankingsJson) {
		return (this.ranking = JSON.parse(rankingsJson));
	}

	addMatch(match) {
		console.log(match);
	}
}
