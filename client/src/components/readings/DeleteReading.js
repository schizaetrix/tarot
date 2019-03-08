import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
// -------------------------------------------------
import { fetchReading, deleteReading } from '../../actions'
import history from '../../history'
import Modal from '../Modal'
// -------------------------------------------------

class DeleteReading extends Component {
    componentDidMount () {
        this.props.fetchReading(this.props.match.params.id)
        let modals = document.querySelectorAll('.modal')
        let options = {
            onCloseEnd: () => history.push('/readings')
        }
        M.Modal.init(modals, options)
        const deleteModal = document.getElementById('delete');
        const instance = M.Modal.init(deleteModal, {});
        instance.open()
    }
    renderActions () {
        const id = this.props.match.params.id
        return (
            <div>
                <button 
                    onClick={() => this.props.deleteReading(id)}
                    className="
                        modal-close waves-effect 
                        waves-purple btn-flat"
                >
                    Delete
                </button>
                <Link 
                    to="/readings" 
                    className="
                        modal-close waves-effect 
                        waves-purple btn-flat"
                >
                    Cancel
                </Link>
            </div>
        )
    }
    renderContent () {
        if (!this.props.reading) {
            return 'Are you sure you want to delete this reading?'
        }
        return `Are you sure you want to delete the reading with title: "${this.props.reading.question}"?`
    }
    render () {
        return (
            <div id="background-image">
                <div id="content-background">
                    <div className="modal-trigger" href="#delete">
                        <Modal 
                            id="delete"
                            title="Delete Reading"
                            content={this.renderContent()}
                            actions={this.renderActions()}
                            onDismiss={() => history.push('/readings')}
                        />
                    </div>
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
    { fetchReading, deleteReading }
)(DeleteReading)
// -------------------------------------------------