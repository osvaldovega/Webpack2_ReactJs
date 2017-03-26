import React, { Component } from 'react';

class Rover extends Component {
	render() {
		const { data } = this.props;
		return (
			<section className={'Rover'}>
				<label>Name: {data.rover.name}</label>
				<img src={data.img_src} />
				<p>Id: {data.id}</p>
			</section>
		);
	}
}

export default Rover;
