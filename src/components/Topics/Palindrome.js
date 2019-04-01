import React, { Component } from 'react'

class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    handleChange(val) {
        this.setState({ userInput: val })
    }

    palin(prop) {
        let result = '';
        if (prop.split('').reverse().join('') === prop) {
            result = 'true'
        } else {
            result = 'false'
        }
        this.setState({ palindrome: result })
        console.log (result)
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={e => this.handleChange(e.target.value)}></input>
                <button className='confirmationBox' onClick={() => this.palin(this.state.userInput)}>Confirm</button>
                <span className='resultsBox'> Palindrome: {this.state.palindrome} </span>

            </div>
        )
    }
}

export default Palindrome;
