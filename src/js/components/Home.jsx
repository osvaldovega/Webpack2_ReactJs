import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchingData } from '../actions/actions';
import Rover from './Rover/Rover';

class Home extends Component {
	componentWillMount() {
		if(!this.props.dataFetched) {
			this.props.fetchingData();
		}
	}

	render() {
		let data = '';
		if (this.props.errorFetching) {
			data = (<div className={'Error_Message'}>Error getting data from NASA...</div>);
		} else if(this.props.dataFetched) {
			data = this.props.nasa.photos.map((element, index) =>
				<Rover key={index} data={element} />);
		} else {
			data = (<p className={'Loading'}>Loading...</p>);
		}



		return (
       <article className={'Home'}>
          <h1>Home - NASA pics from Rover</h1>
					{data}
       </article>
		);
	}
}

// Ge the state from the store
function mapStateToProps(state) {
	return {
		nasa: state.App.nasa,
		dataFetched: state.App.dataFetched,
		errorFetching: state.App.errorFetching
	};
}

// Trigger the actions
function matchDispatchToProps(dispatch){
	return bindActionCreators({ fetchingData }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
