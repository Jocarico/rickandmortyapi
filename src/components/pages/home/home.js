import React from "react";
import Character from "../../character/character";
import './home.css';
import Http from "../../../lib/request";

class Home extends React.Component{
    state = {
        title:"Example of request using React",
        characters:[],
    };
    componentDidMount = () => {
        this.get_data(URL);
    };
    
    get_data = async () => {
        const response = await Http.instance.get_characters();
        this.setState({ characters: response })
    };

    render(){
        
        return(
            <React.Fragment>
                <h1>{this.state.title}</h1>
                <div className="Characters">
                    {this.state.characters.map((character)=>{
                        return(
                            <Character character={character}/>
                        )
                    })}
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
