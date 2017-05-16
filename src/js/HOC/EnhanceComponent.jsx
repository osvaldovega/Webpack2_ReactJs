import React, { Component } from 'react';

const NewComponent = (props) = (WrappedComponent) => {
  return class EnhanceComponent extends Component {
    constructor(props) {
      super(props);

      this.test = this.test.bind(this);
      this.state = {
        time: 0
      };
    }

    test(e) {
      this.setState({ time: e.target.value });
    }

    render() {
      return (<WrappedComponent {...this.props} test={this.test} st={this.state.time} />);
    }
  };
};

export default NewComponent;
