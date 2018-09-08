import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    time: state.time
  }
}

class Time extends React.Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate_counter = 0;
    this.componentDidUpdate_counter = 0;
    this.componentDidMount_counter = 0;
    this.componentWillMount_counter = 0;

  }

  shouldComponentUpdate(nextProps, nextState){
    this.shouldComponentUpdate_counter++;
    return true;
  }
  componentDidUpdate(prevProps) {
    this.componentDidUpdate_counter++;
  }
  componentDidMount() {
    this.componentDidMount_counter++;
  }
  componentWillMount() {
    this.componentWillMount_counter++;
  }

  render() {
    return (<div>
      <br/>
      <br/>
      {this.props.time}
      <br/>
      <br/>
      <strong>Component Lifecycle Functions</strong>
      <br/>
      <br/>
      <span>componentWillMount: {this.componentWillMount_counter}</span>
      <br/>
      <span>componentDidMount: {this.componentDidMount_counter}</span>
      <br/>
      <span>shouldComponentUpdate: {this.shouldComponentUpdate_counter}</span>
      <br/>
      <span>componentDidUpdate: {this.componentDidUpdate_counter}</span>
      <br/>

    </div>)
  }
}

export default connect(mapStateToProps)(Time);
