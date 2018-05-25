import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Edit from './components/Edit'
import ImgRender from './components/ImgRender'
import Header from './components/Header'
import Footer from './components/Footer'



class App extends Component {
  constructor(){
    super();

    this.state = {
      listOfResults: [],
      userName:''
    }

    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

    componentDidMount() {
      axios.get('/api/users').then( res => { 
        this.setState({ listOfResults: res.data })
      })
    }

    addUser(){
      let num = Math.floor(Math.random() * Math.floor(26))
      axios.post('/api/randomIndex/' + num + '?user=' + this.state.userName)
        .then( res => {
          this.setState({ listOfResults: res.data })
        })
    }

    editUser(userName, id){
      console.log(id)
      axios.put('/api/users/' + id, {userName}) 
        .then( res => {
          console.log(res.data)
          this.setState({ listOfResults: res.data })
        })
    }
    
    deleteUser(id){
      for(let i = 0; i < this.state.listOfResults.length; i++){
        let id = this.state.listOfResults[i].id
        // console.log(id)
          axios.delete('/api/users/' + id) 
          .then( res => {
        // console.log(res.data) 
        this.setState({ listOfResults: res.data}) 
      })
    }
  }

    handleChange(event){
      this.setState({ userName: event.target.value })
    }


  render() {
    console.log(this.state)
    let userResult = this.state.listOfResults.map((e,i) => {
      return (<div key={i} >
        <p> {e.user} recieved {e.name} </p>
        <ImgRender url={e.gif}/>
        <br />
       <Edit editUser={this.editUser} id={e.id}/>
        <button onClick={this.deleteUser}>X</button>
        <hr />
      </div>)
    })
  
    return (
      <div className="App">
        
        <div>
          <div className="App-intro">
          <Header />
            
            <input type="text" 
              className="textInput"
              value = {this.state.userName}
              onChange = {(e) => this.handleChange(e)} 
              placeholder='Type your Name'/>


              <br /> 
            
            <button className="button" onClick={this.addUser}>Press to recieve a random character!</button>
            <br />
            <hr />

            <h2>Results:</h2>
          {userResult}

          
          <Footer />
        </div>
        </div>
      </div>
    ); 
  }
}

export default App;
