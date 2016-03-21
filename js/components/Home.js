import React from 'react'
import PULSEBALL from '../PULSEBALL';
import Ranking from './Ranking';

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.pb = new PULSEBALL();
	}
	render() {
		return (
			<div className="container">
				<h1>Pulseball</h1>
				<Ranking pb={this.pb} />
			</div>
		)
	}
}
