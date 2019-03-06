import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import '../styles/App.css'
import Header from './Header'
import Landing from './Landing'
import DailyCard from './DailyCard'


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
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App