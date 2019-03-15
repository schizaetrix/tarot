import React, { Component } from 'react'
// -------------------------------------------------

class SearchBar extends Component {
    state = { term: '' }
    onInputChange = (event) => {
        this.setState({ 
            term: event.target.value
        })
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }
    render () {
        return (
            <form 
                autoComplete="off"
                style={{ 
                    marginTop: '20px',
                    width: '30%'
                }}
                onSubmit={this.onFormSubmit}
            >
                <div className="input-field">
                    <input 
                        id="search-bar" 
                        type="search"
                        onChange={this.onInputChange}
                        value={this.state.term}
                    />
                </div>
            </form>
        )
    }
}

// -------------------------------------------------
export default SearchBar
// -------------------------------------------------