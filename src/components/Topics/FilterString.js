import React, { Component } from 'react'

class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: ['monkey', 'middle', 'goober', 'trooper'],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val) {
        this.setState({ userInput: val })
    }
    filterString(prop) {
        let arr = this.state.unFilteredArray;
        console.log(arr)
        let filter = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].includes(prop)) {
                filter.push(arr[i])
            }
        }
        this.setState({ filteredArray: filter })
    }


    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Unfiltered: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.filterString(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>

            </div>
        )
    }
}

export default FilterString