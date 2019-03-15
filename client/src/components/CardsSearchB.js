import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import history from '../history'
import { filterB } from '../actions'
import Cards from '../images/cardsDB'
import CardsCarouselB from './CardsCarouselB'
import SearchBar from './SearchBar'
import BackButton from './BackButton'
// -------------------------------------------------

class CardsSearchB extends Component {
    searchCards = async (search) => {
        const searchString = await search.toLowerCase()
        const filterCards = await Cards.filter((cards) => {
            let cardIndices = cards.title.toLowerCase().indexOf(searchString) > -1
            return cardIndices
        })
        if (search === '') {
            this.props.filterB(Cards)
        } else {
            this.props.filterB(filterCards)
        }
    }
    render () {
        return (
            <div className="row background-image">
                <BackButton 
                    backBtnRoute={() => history.push('/')}
                    backBtnTooltip="Back to Home"
                />
                <div className="content-background white-text">
                    <h2>Cards Search</h2>
                    <SearchBar 
                        onFormSubmit={this.searchCards}
                    />
                    <CardsCarouselB 
                        searchState={this.props.filter}
                        carouselId="filterB"
                    />
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
const mapStateToProps = (state) => {
    return {
        filter: state.filter.filteredCards
    }
}
// -------------------------------------------------
export default connect(
    mapStateToProps,
    { filterB }
)(CardsSearchB)
// -------------------------------------------------