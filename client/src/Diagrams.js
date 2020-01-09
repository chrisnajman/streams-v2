import React from "react"
import StreamsReduxFlow from './assets/StreamsReduxFlow.png'
import ConventionalReduxFlow from './assets/ConventionalReduxFlow.png'
import HandlingInputsWithReduxForm from './assets/HandlingInputsWithReduxForm.png'
import HandlingInputsWithoutRedux from './assets/HandlingInputsWithoutRedux.png'
import RESTfulConventions from './assets/RESTfulConventions.png'

const Diagrams = () => {

    return (
        <div className="ui container">
            <div className="ui segment">
                <h2>RESTful Conventions</h2>
                <img src={RESTfulConventions} alt="RESTful Conventions" className="ui centered image" />
            </div>
            <div className="ui segment">
                <h2>Handling Inputs with Redux Form</h2>
                <img src={HandlingInputsWithReduxForm} alt="Handling inputs with Redux Form" className="ui centered image" />
                <h2>Handling Inputs without Redux</h2>
                <img src={HandlingInputsWithoutRedux} alt="Handling inputs without Redux" className="ui centered image" />
            </div>
            <div className="ui segment">
                <h2>Redux flow for this app</h2>
                <img src={StreamsReduxFlow} alt="Redux flow for this app" className="ui centered image" />
                <h2>Conventional Redux flow</h2>
                <img src={ConventionalReduxFlow} alt="Redux flow for this app" className="ui centered image" />
            </div>
        </div>
    )

}

export default Diagrams
