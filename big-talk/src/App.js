import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Card from "./Card/Card";
import Draw from "./Draw/Draw"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [{id: 1, question: "What do you want to do before you die?"},
                    {id: 2, question: "How are you?"}],
            currentCard: {}
        }
    }
    componentWillMount() {
        const currentCards = this.state.cards;
        this.setState({
            cards: currentCards,
            currentCard: this.getRandomCard(currentCards)
        })
    }
    
    getRandomCard(currentCards) {
        var card = currentCards[Math.floor(Math.random() * currentCards.length)];
        return(card);
    }
    
    render() {
        return (
            <div className="App">
                <div className="cardRow">
                    <Card question={this.state.currentCard.question}/>
                </div>
                <div classname="buttonRow">
                    <Draw />
                </div>

            </div>
        );
    }
}

export default App;
