import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import CounterComponent from '../components/CounterComponent';
import actionCreators from '../actions/action-creators';


@connect(
    state => ({ value: state.counter.value}),
    (dispatch, props) => ({actions: bindActionCreators(actionCreators, dispatch)})
)

export default class CounterContainer extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
    }

    render() {
        return (<CounterComponent value={this.props.value} actions={this.props.actions}/>)
    }
}
