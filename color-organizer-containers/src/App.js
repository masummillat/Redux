import React, { Component } from 'react';
import './stylesheets/APP.scss'
import propTypes from 'prop-types'
import {Menu, NewColor, Colors} from "./components/containers";
import { sortFunction } from './lib/array-helpers'

class App extends Component {


    getChildContext() {
        return {
            store: this.props.store
        }
    }

    componentWillMount() {
        this.unsubscribe = this.props.store.subscribe(
            () => this.forceUpdate()
        )
    }

    componentWillUnmount () {
        this.unsubscribe()
    }

    render() {
        return (
            <div className="app">
                <Menu />
                <NewColor />
                <Colors />
            </div>
        )
    }

}

App.propTypes = {
    store: propTypes.object.isRequired
}

App.childContextTypes = {
    store: propTypes.object.isRequired
}


export default App;
