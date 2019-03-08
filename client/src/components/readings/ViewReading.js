import React, { Component } from 'react'
import { connect } from 'react-redux'
// -------------------------------------------------
import { fetchReading } from '../../actions'
// -------------------------------------------------

class ViewReading extends Component {
    componentDidMount () {
        this.props.fetchReading(this.props.match.params.id)
    }
    render () {
        if (!this.props.reading) {
            return <div>Loading</div>
        }
        return (
            <div id="background-image">
                <div id="content-background">
                    <h2 className="white-text">
                        {this.props.reading.question}
                    </h2>
                </div>
            </div>
        )
    }
}

// -------------------------------------------------
const mapStateToProps = (state, ownProps) => {
    return { 
        reading: state.readings[ownProps.match.params.id] 
    }
}
// -------------------------------------------------
export default connect(
    mapStateToProps,
    { fetchReading }
)(ViewReading)
// -------------------------------------------------