import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// -------------------------------------------------
import '../styles/App.css'
import Header from './Header'
import Landing from './Landing'
import CreateReading from './readings/CreateReading'
import ReadingsList from './readings/ReadingsList'
import OneCardSpread from './readings/OneCardSpread'
import ThreeCardSpread from './readings/ThreeCardSpread'
import FiveCardSpread from './readings/FiveCardSpread'
// -------------------------------------------------

class App extends Component {
    render () {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route 
                            path='/'
                            exact component={Landing}
                        />
                        <Route 
                            path='/readings/new'
                            exact component={CreateReading}
                        />
                        <Route 
                            path='/readings'
                            exact component={ReadingsList}
                        />
                        <Route 
                            path='/readings/onecard'
                            exact component={OneCardSpread}
                        />
                        <Route 
                            path='/readings/threecard'
                            exact component={ThreeCardSpread}
                        />
                        <Route 
                            path='/readings/fivecard'
                            exact component={FiveCardSpread}
                        />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

// -------------------------------------------------
export default App
// -------------------------------------------------