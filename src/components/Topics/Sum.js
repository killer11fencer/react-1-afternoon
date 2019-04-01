import React, { Component } from 'react'

class Sum extends Component {
    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange1(val) {
        this.setState({ number1: val })
    }
    handleChange2(val) {
        this.setState({ number2: val })
    }
    addition() {
        this.setState({ sum: (+this.state.number1) + (+this.state.number2) })
    }
    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>SUM</h4>
                <input className='inputLine' onChange={(e) => this.handleChange1(e.target.value)}></input>
                <input className='inputLine' onChange={(b) => this.handleChange2(b.target.value)}></input>
                <button className='confirmationBox' onClick={() => this.addition()}>Add</button>
                <span className='resultsBox'>{this.state.sum}</span>


            </div>
        )
    }
}

export default Sum;
