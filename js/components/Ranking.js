import React from 'react';
import { initialRanking, franceEnglandMatch } from '../constants';

export default class Ranking extends React.Component {
	constructor(props) {
		super(props);

		this.pb = this.props.pb;
		this.pb.init(initialRanking);
		this.state = { teams: this.pb.getAllTeams() };
	}
	handleClick() {
		this.pb.addMatch(franceEnglandMatch);
		this.setState({ teams: this.pb.getAllTeams() })
	}
	render() {
		var teams = this.state.teams.map((team, i) => {
			return (
				<tr key={i}>
					<td>{team.pos}</td>
					<td>{team.name}</td>
					<td>{team.pts.toFixed(2)}</td>
				</tr>
			)
		});

		return (
			<div class="row">
				<table className="table table-hover">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Points</th>
						</tr>
					</thead>
					<tbody>
						{teams}
					</tbody>
				</table>
				<button className="btn btn-default" onClick={() => this.handleClick()}>Play ENGvFRA</button>
			</div>
		)
	}
}
