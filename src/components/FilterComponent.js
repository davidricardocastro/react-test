import React from 'react';
import ReactDOM from 'react-dom';





export default class Filter extends React.Component {

    constructor(props) {
        super(props); //call the constructor of React.Component

        this.state = {
            input_value: ''
        }
    }


    inputValueChanged(elem){
        this.setState({
            input_value: event.target.value

        })

    }

    render() {
        return (
            <nav className="filter">
                <label htmlFor="filter">Filter</label>
                <input type="text" name="filter" id="filter" 
                value={this.state.input_value}
                onChange={(elem)=> {this.inputValueChanged(elem)}}
                 placeholder="enter search term" />
            </nav>
        );
    }
}

