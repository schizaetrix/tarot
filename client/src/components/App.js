import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Heading from './Heading'
import Landing from './Landing'
import DailyCard from './DailyCard'


class App extends Component {
    render () {
        return (
            <div>
                <Heading />
                <BrowserRouter>
                    <div>
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