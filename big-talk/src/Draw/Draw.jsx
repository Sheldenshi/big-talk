import React, { Component } from 'react';
import './Draw.css';

class Draw extends Component {
    constructor(props) {
        super(props);
        
        this.drawCard = this.drawCard.bind(this);
    }

    drawCard(){
        this.props.drawCard();
    }

    render(props) {
        return(
            <div className="buttonContainer">
                <button className="btn" onClick={this.drawCard}>New Question</button>
            </div>
        );
    }
}

export default Draw;