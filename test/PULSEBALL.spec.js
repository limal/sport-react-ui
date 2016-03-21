import PULSEBALL from '../js/PULSEBALL';
import initialRanking from '../js/initialRanking';

describe('PULSEBALL', function () {
	var pulseball;

	beforeEach(function() {
		pulseball = new PULSEBALL();
	});

	it('should initialise properly', function () {
		expect(pulseball.init(initialRanking)).to.be.an('array');
	});

	it('should throw an error if there\'s a syntax error in JSON file', function() {
		var brokenInitialRanking = initialRanking + '@'; // add a random character to the JSON
		expect(() => pulseball.init(brokenInitialRanking)).to.throw();
	});
});
