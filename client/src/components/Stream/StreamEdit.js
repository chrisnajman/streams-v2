import _ from 'lodash'
import React, { Component } from "react"
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../redux/actions/'
import StreamForm from './StreamForm'

class StreamEdit extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        // console.log(formValues)
        this.props.editStream(this.props.match.params.id, formValues)
    }


    render() {
		
		if (!this.props.stream) {
			return <div>Loading...</div>
		}

        return (
            <React.Fragment>
                <h1>Edit a Stream</h1>
                <StreamForm
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                />

            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)

/**
 * 
 *   WITHOUT USING _LODASH:
 * 
    if(!this.props.stream){
        return <div>Loading...</div>
    }

    initialValues={
        {
            title: this.props.stream.title,
            description: this.props.stream.description
        }
    }
 */

