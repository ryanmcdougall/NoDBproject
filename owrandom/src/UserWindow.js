import React, { Component } from 'react'

class UserInput extends Component {
    constructor(){
        super()
        this.state = {
            input: ''
        }
        
        
        this.handleChange = this.handleChange.bind( this );
        this.createInput = this.createInput.bind( this );
        this.editInput = this.editInput.bind( this );
        this.deleteInput = this.deleteInput.bind( this);
    }

    componentDidMount() {
        axios.get( url ).then( response => {
            this.setState({ input: response.data })
        })
    }

    render(){
        
    }
}
