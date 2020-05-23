import React, { Component } from 'react';
import './randomChar.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import GotService from '../../services/gotService';

export default class RandomChar extends Component {

    constructor() {
        super();
        this.updateChar();
    }

    gotService = new GotService();

    state = {
        char: {}
    }

    onCharLoaded = (char) => {
        this.setState({ char });
    }

    updateChar() {
        const id = Math.floor(Math.random() * 140 + 25);

        this.gotService.getCharacter(id)
            .then(this.onCharLoaded);
    }

    render() {

        const { char: { name, gender, born, died, culture } } = this.state;

        return (
            <div className="random-block rounded">
                <h4>Random Character: {name}</h4>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}
