import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    BrowserRouter
  } from 'react-router-dom'
import GenreGenerator from './GenreGenerator'
import PlaylistGenerator from './PlaylistGenerator'

class Routing extends Component {
    render(){
        return(
            <BrowserRouter>
                <Router forceRefresh>
                    <Route exact path="/">
                        <GenreGenerator />
                    </Route>
                </Router>
                <Router forceRefresh>
                    <Route exact path="/playlist">
                        <PlaylistGenerator />
                    </Route>
                </Router>
             </BrowserRouter>
        )
    }
}

export default Routing;