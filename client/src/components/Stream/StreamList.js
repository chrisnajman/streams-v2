import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchStreams } from '../../redux/actions/'

class StreamList extends Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderAdminButtons = (stream) => {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="buttons">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link 
                        to={`/streams/delete/${stream.id}`} 
                        className="ui button negative">
                        Delete
                    </Link>
                </div>
            )
        }
    }

    renderList = () => {
        return this.props.streams.map(stream => {
            return (
                <li key={stream.id}>
                    <i className="large middle aligned icon video" />
                    <div className="content">
                        <h2>
                            <Link 
                                to={`/streams/${stream.id}`}
                                className="header"
                            >
                                {stream.title}
                            </Link>
                        </h2>
                        <p className="description">{stream.description}</p>
                    </div>
                    {this.renderAdminButtons(stream)}

                </li>
            )
        })
    }

    renderCreateStreamButton = () => {
        if (this.props.isSignedIn) {
            return (
                <div className="createStream">
                    <Link to="/streams/new" className="ui button primary">Create Stream</Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="streamsContainer">
                <h1>All Streams</h1>
                <ul className="streamList">
                    {this.renderList()}
                </ul>
                {this.renderCreateStreamButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList)

