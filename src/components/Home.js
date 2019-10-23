import React from "react";
import axios from 'axios';
import CharList from "./CharList";
import "../style/Home.css";

class Home extends React.Component {
    state = { characters: [], }
  

    componentDidMount() {
     axios.get("https://swapi.co/api/people")
      .then((res) => {
        this.setState({ characters: res.data.results })
      })
   }
  
   
  
    render() {
      return (
  
        <div className="App">
          <div className="main-div">
          <h1 className="main-header">Star Wars Characters:</h1>
          </div>
          <br/>
          <br/>
          <div>
            <CharList planets={this.state.planets} characters={this.state.characters} />
          </div>
          
  
        </div>
      );
    } 
    }
  
  export default Home;