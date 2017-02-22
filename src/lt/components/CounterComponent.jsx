import React, { PropTypes } from 'react';


export default function CounterComponent(props) {
    console.log(props);
    return (<div>
        <label>{ props.value }</label>
        <button onClick={ (e) => props.actions.add(1)}>Add</button>
        <button onClick={ (e) => props.actions.addAsync(1)}>AddAsync</button>
        </div>);
}

CounterComponent.propTypes = {
    value: PropTypes.number.isRequired,
    actions: PropTypes.shape({
        add: PropTypes.func.isRequired,
        addAsync: PropTypes.func.isRequired,
    })
};

CounterComponent.defaultProps = {
    value: null,
};
