import React from "react"
import { Switch, Route } from 'react-router-dom'


import './App.scss'

import Header from './components/Header/Header'

import StreamList from './components/Stream/StreamList'
import StreamCreate from './components/Stream/StreamCreate'
import StreamEdit from './components/Stream/StreamEdit'
import StreamDelete from './components/Stream/StreamDelete'
import StreamShow from './components/Stream/StreamShow'

import NoMatch from './404'

/* Diagrams */
import Diagrams from './Diagrams.js'







const App = () => {

    return (
        <article className="ui container">
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={StreamList} />
                    <Route path="/streams/new" component={StreamCreate} />
                    <Route path="/streams/edit/:id" component={StreamEdit} />
                    <Route path="/streams/delete/:id" component={StreamDelete} />
                    <Route path="/streams/:id" component={StreamShow} />
                    <Route path="/diagrams" component={Diagrams} />
                    <Route component={NoMatch} />
                </Switch>
            </main>
        </article>
    )
}

export default App
