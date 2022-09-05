import React, {Component} from "react";
import CardList from '../components/cardlist.js';
import SearchBar from '../components/searchbar.js';
import './app.css'
import Scroll from '../components/scroll.js'
import ErrorBoundry from "../components/error.boundry.js";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robot: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robot:users}));
    }
    onSearchChange =  (event) => {
        this.setState({searchfield: event.target.value});
    }
    render() {
        const filtredRobot = this.state.robot.filter(robot =>{ 
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    return (
       
        <div className="tc">
            <h1 className="f2">Kitty Nation</h1>
            <SearchBar searchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                <CardList robots={filtredRobot} />
                </ErrorBoundry>
            </Scroll>
        </div>
    ); 
    }
}


export default App;