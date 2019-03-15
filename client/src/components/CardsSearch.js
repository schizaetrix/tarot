import React, { Component } from 'react'
// -------------------------------------------------
import Cards from '../images/cardsDB'
import CardsCarousel from './CardsCarousel'
import SearchBar from './SearchBar'
import BackButton from './BackButton'
// -------------------------------------------------

class CardsSearch extends Component {
    constructor (props) {
        super(props)
        this.state = { 
            search: Cards
        }
    }
    searchCards = async (search) => {
        const searchString = await search.toLowerCase()
        const filterCards = await Cards.filter((cards) => {
            let cardIndices = cards.title.toLowerCase().indexOf(searchString) > -1
            return cardIndices
        })
        if (search === '') {
            this.setState({
                search: Cards
            })
        } else {
            this.setState({
                search: filterCards
            })
        }
        console.log(this.state.search)
        this.forceUpdate()
    }
    render () {
        return (
            <div className="row background-image">
                <BackButton />
                <div className="content-background white-text">
                    <h2>Cards Search</h2>
                    <SearchBar 
                        onFormSubmit={this.searchCards}
                    />
                    <CardsCarousel 
                        searchState={this.state.search}
                    />
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
export default CardsSearch
// -------------------------------------------------