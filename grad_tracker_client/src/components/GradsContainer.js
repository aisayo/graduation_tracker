import React, { Component } from 'react';
import { connect } from 'react-redux'

import GradsForm from './GradsForm'
import {fetchGrads} from '../actions/gradsActions'

class GradsContainer extends Component {

    componentDidMount() {
        this.props.fetchGrads()
    }
    render() {
        return (
            <div>
                <GradsForm />
            </div>
        );
    }
}

export default connect(null, {fetchGrads})(GradsContainer);