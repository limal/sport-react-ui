import PULSEBALL from '../js/PULSEBALL';
import { initialRanking, franceEnglandMatch } from '../js/constants';

describe('PULSEBALL', function () {
	var pulseball;

	beforeEach(function() {
		pulseball = new PULSEBALL();
	});

	describe('init()', function() {
		it('should initialise properly', function () {
			expect(pulseball.init(initialRanking)).to.be.an('array');
		});

		it('should throw an error if there\'s a syntax error in JSON file', function() {
			var brokenInitialRanking = initialRanking + '@'; // add a random character to the JSON
			expect(() => pulseball.init(brokenInitialRanking)).to.throw(); // for testing exceptions, wrap with an anonymous function first
		});
	});

	describe('addMatch', function() {
		it('should calculate correct ratings', function() {
			pulseball.init(initialRanking);
			pulseball.addMatch(franceEnglandMatch);
			expect(pulseball.getTeam("England").pts).to.equal(53.68);
			expect(pulseball.getTeam("France").pts).to.equal(51.59);
		});
	});
});
