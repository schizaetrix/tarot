import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import '../styles/App.css'
import Header from './Header'
import Landing from './Landing'
import DailyCard from './DailyCard'
import CreateReading from './readings/CreateReading'


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
                            path='/dailycard'
                            exact component={DailyCard}
                        />
                        <Route 
                            path='/readings/new'
                            exact component={CreateReading}
                        />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App