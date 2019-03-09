import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
// -------------------------------------------------
import '../styles/App.css'
import Header from './Header'
import Landing from './Landing'
import CreateReading from './readings/CreateReading'
import EditReading from './readings/EditReading'
import DeleteReading from './readings/DeleteReading'
import ViewReading from './readings/ViewReading'
import ReadingsList from './readings/ReadingsList'
import history from '../history'
// -------------------------------------------------

class App extends Component {
    render () {
        return (
            <div className="container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route 
                                path='/'
                                exact component={Landing}
                            />
                            <Route 
                                path='/readings/new'
                                exact component={CreateReading}
                            />
                            <Route 
                                path='/readings/edit/:id'
                                exact component={EditReading}
                            />
                            <Route 
                                path='/readings/delete/:id'
                                exact component={DeleteReading}
                            />
                            <Route 
                                path='/readings/:id'
                                exact component={ViewReading}
                            />
                            <Route 
                                path='/readings'
                                exact component={ReadingsList}
                            />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

// -------------------------------------------------
export default App
// -------------------------------------------------