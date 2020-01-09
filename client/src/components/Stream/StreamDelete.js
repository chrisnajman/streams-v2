import React, { Component } from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStream, deleteStream } from '../../redux/actions/'
import ModalPortal from '../ModalPortal/ModalPortal'

import history from '../../history'

class StreamDelete extends Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions = () => {
        const { id } = this.props.match.params
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )

    }

    renderTitle = () => {
        if (!this.props.stream) {
            return 'Delete Stream'
        }

        return `Delete Stream: ${this.props.stream.title}`
    }

    render() {

        return (

            <ModalPortal
                onDismiss={() => history.push('/')}
                title={this.renderTitle()}
                content="Are you sure you want to delete this stream?"
                actions={this.renderActions()}
            />
        )
    }



}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}


export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)




// import React from "react"
// import ModalPortal from '../ModalPortal/ModalPortal'
// import history from '../../history'

// const StreamDelete = () => {

//     const actions = (
//         <React.Fragment>
//             <button className="ui button negative">Delete</button>
//             <button onClick={() => history.push('/')} className="ui button">Cancel</button>            
//         </React.Fragment>
//     )

//     return (

//         <ModalPortal 
//             onDismiss={() => history.push('/')}
//             title="Delete Stream"
//             content="Are you sure you want to delete this stream?"
//             actions={actions}
//         />
//     )

// }

// export default StreamDelete
