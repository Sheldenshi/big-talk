import React, { Component } from "react";
import "./App.css";
import Card from "./Card/Card";
import Draw from "./Draw/Draw";
import { DB_CONFIG } from './Config/Firebase/db_config';
import firebase from 'firebase/app';
import 'firebase/database';


class App extends Component {
    constructor(props) {
        super(props);
        if (!firebase.apps.length) {
            this.app = firebase.initializeApp(DB_CONFIG);
        }
        this.database = firebase.database().ref().child('cards');
        this.updateCard = this.updateCard.bind(this);
        this.state = {
            cards: [],
            currentCard: {}
        }
    }
    componentDidMount() {
        const currentCards = this.state.cards;

        this.database.on('child_added', snap => {
            currentCards.push({
                id: snap.key,
                question: snap.val().question
            })
            this.setState({
                cards: currentCards,
                currentCard: this.getRandomCard(currentCards)
            })
        })

        
    }
    
    getRandomCard(currentCards) {
        var card = currentCards[Math.floor(Math.random() * currentCards.length)];
        return(card);
    }
    
    updateCard() {
        const currentCards = this.state.cards;
        this.setState({
            currentCard: this.getRandomCard(currentCards)
        })
    }

    render() {
        return (
            <div className="App">
                <div className="cardRow">
                    <Card question={this.state.currentCard.question}/>
                </div>

                <div className="buttonRow">
                    <Draw drawCard={this.updateCard}/>
                </div>

            </div>
        );
    }
}

export default App;
