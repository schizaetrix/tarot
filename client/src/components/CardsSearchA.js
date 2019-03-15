import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import history from '../history'
import { filterA } from '../actions'
import Cards from '../images/cardsDB'
import CardsCarouselA from './CardsCarouselA'
import SearchBar from './SearchBar'
import BackButton from './BackButton'
// -------------------------------------------------

class CardsSearchA extends Component {
    searchCards = async (search) => {
        const searchString = await search.toLowerCase()
        const filterCards = await Cards.filter((cards) => {
            let cardIndices = cards.title.toLowerCase().indexOf(searchString) > -1
            return cardIndices
        })
        if (search === '') {
            this.props.filterA(Cards)
        } else {
            this.props.filterA(filterCards)
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
                    <CardsCarouselA 
                        searchState={this.props.filter}
                        carouselId="filterA"
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
    { filterA }
)(CardsSearchA)
// -------------------------------------------------