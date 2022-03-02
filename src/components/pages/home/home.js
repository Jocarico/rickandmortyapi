import React from "react";
import Character from "../../character/character";
import './home.css';
import Http from "../../../lib/request";

class Home extends React.Component{
    state = {
        title:"Rick and Morty API with React",
        characters:[],
    };
    componentDidMount = () => {
        this.get_data();
    };
    
    get_data = async () => {
        const response = await Http.instance.get_characters();
        this.setState({ characters: response })
    };

    render(){
        
        return(
            <React.Fragment>
                <div className="back">
                    <div className="logoHolder">
                        <h1>Rick and Morty Characters</h1>
                    </div>
                    <div className="Characters">
                        {this.state.characters.map((character) =>{
                            return <Character character = {character} />
                        })}
                        
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}

export default Home;
