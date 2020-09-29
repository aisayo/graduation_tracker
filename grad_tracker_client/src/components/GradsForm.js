import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addGrad } from '../actions/gradsActions'

class GradsForm extends Component {

    state = { 
        name: '',
        degree: '',
        grad_date: '',
        school: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addGrad(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
                <br/>

                <label>Degree</label>
                <input type='text' value={this.state.degree} onChange={this.handleChange} name='degree'/>
                <br/>

                <label>Grad Date</label>
                <input type='text' value={this.state.grad_date} onChange={this.handleChange} name='grad_date'/>
                <br/>

                <label>School</label>
                <input type='text' value={this.state.school} onChange={this.handleChange} name='school'/>
                <br/>

                <input type='submit' value='Create Grad' />


            </form>
        );
    }
}

export default connect(null, { addGrad })(GradsForm);