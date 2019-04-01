import React, { Component } from 'react'

class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            unfiltered: [{ brand: 'mercedes', age: 2 }, { type: 'draft', age: 5 }, { kind: 'cargo' }, { make: 'toll', color: 'brown' }],
            inputs: '',
            filtered: []
        }
    }
    updates(val) {
        this.setState({ userInput: val })
    }
    filterKind(prop) {
        console.log(prop)
        let arr = this.state.unfiltered;
        let filteredStuff = [];
        // console.log(arr)
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].hasOwnProperty(prop)) {
                filteredStuff.push(arr[i])
            }
        }

        this.setState({filtered:filteredStuff})
        console.log(this.state.filtered)
    }

    render() {
        console.log(this.state.userInput)
        return (

            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.unfiltered, null, 10)}</span>
                <input className='inputLine' onChange={(e) => this.updates(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.filterKind(this.state.userInput)}>Filter</button>
                <span className='resultsBox filter ObjectRB'> Filtered: {JSON.stringify(this.state.filtered, null, 10)} </span>

            </div>
        )
    }

}

export default FilterObject;
