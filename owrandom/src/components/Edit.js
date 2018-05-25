import React, { Component } from 'react'

export default class Edit extends Component {
    constructor(props){
        super(props)

        this.state = {
            editToggle: false,
            editUsername: '',
            id: 0
        }
    }

    componentDidMount(){
        this.setState({editUsername: this.props.userName,
            id: this.props.id})
            console.log()
    }

    saveClick(){
        if(this.state.editToggle){
            this.props.editUser(this.state.editUsername, this.props.id)
        }
        this.setState({ editToggle: !this.state.editToggle})
    }

    render(){
        return(
            <div className="result">
                {
                    this.state.editToggle
                    ?
                    <div>
                        <input value={this.props.userName} onChange={e => {this.setState({editUsername: e.target.value})}} />
                    </div>
                    :
                    <div>
                        <h4>{this.props.userName}</h4>
                    </div>
                }
                <button onClick={() => this.saveClick()}>{this.state.editToggle ? 'Save' : 'Edit'}</button>
            </div>
        )
    }
}