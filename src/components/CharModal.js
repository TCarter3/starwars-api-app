import React from "react";
import { Modal, } from "react-bootstrap";
import axios from "axios"

class CharModal extends React.Component {
    state = { planets: [], characters: {...this.props} }

    componentDidMount() {
       axios.get("https://swapi.co/api/planets")
      .then((res) => {
        console.log(res.data.results );
        this.setState({ planets: res.data.results })
      })
    }

    // compareChar() {
    //     if(this.state.planets.url == this.props.characters.homeworld)
        
    // }

    render() {
        const characters = this.props.characters
        const planets = this.state.planets
        return(
                <Modal {...this.props}>
                    <Modal.Header closeButton><h1>{characters.name}</h1></Modal.Header>
                    <Modal.Title>Home Planet: {characters.homeworld}</Modal.Title>
                    <hr/>
                    <Modal.Body>
                        <p><strong>Birth Year:</strong> {characters.birth_year}</p>
                        <p><strong>Gender:</strong> {characters.gender}</p>
                        <p><strong>Eye Color:</strong> {characters.eye_color}</p>
                    </Modal.Body>
                </Modal>
        );
    };
};

export default CharModal;