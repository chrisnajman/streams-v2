import React, { Component } from "react"
import { connect } from 'react-redux'
import { fetchStream } from '../../redux/actions/'


class StreamDelete extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }


    render() {

        if (!this.props.stream) {
            return <div>Loading...</div>
        }

        const { title, description } = this.props.stream

        return (
            <React.Fragment>
                <h1>{title}</h1>
                <p className="ui tiny header">{description}</p>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, { fetchStream })(StreamDelete)

