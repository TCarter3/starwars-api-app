import React from "react";
import "../style/CharInfo.css";
import CharModal from "./CharModal";

class CharInfo extends React.Component {
    state = { showModal: false, };

    render() {
        let modalClose = () => this.setState({ showModal: false, }) 
        const characters = this.props.characters
        return(
            <>
            <button onClick={ () => this.setState({showModal: true})} className="button" style={{verticalAlign: "middle"}}><span>Info</span></button>
            <CharModal 
            planets={this.props.planets}
            characters={this.props.characters}
            show={this.state.showModal}
            onHide={modalClose} />
            </>
        );
    };
};

export default CharInfo;