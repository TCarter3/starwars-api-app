import React from "react";
import { Card, Button, } from "semantic-ui-react";
import CharInfo from "./CharInfo";
import "../style/CharList.css";

class CharList extends React.Component {

  comparePeople() {
    
  }

    render() {
        const characters = this.props.characters
        const planets = this.props.planets
        return(
            <div className="all-names">{
                characters.map((c) => {
                    return(
                      <div className="name-bt-display">
                        <h1 style={{padding: "3px"}}>{c.name}</h1><br/>
                        <CharInfo planets={this.props.planets} characters={c} />
                        <br/>
                      </div>
                    )
                })
            }
                
            </div>
        );
    };
};



export default CharList;