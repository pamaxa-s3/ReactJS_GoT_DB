import React, { Component } from 'react';
import './randomHouse.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default class RandomHouse extends Component {

    constructor() {
        super();
        this.updateHouse();
    }

    gotService = new GotService();

    state = {
        house: {},
        loading: true,
        error: false
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    onHouseLoaded = (house) => {
        this.setState({
            house,
            loading: false
        });
    }

    updateHouse() {
        // const id = 13000000;
        const id = Math.floor(Math.random() * 140 + 25);

        this.gotService.getHouse(id)
            .then(this.onHouseLoaded)
            .catch(this.onError);
    }

    render() {

        const { house, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <View house={house} /> : null;

        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const View = ({ house: { name, region, words, titles, overlords, ancestralWeapons } }) => {
    return (
        <>
            <h4>Random House: {name}</h4>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Region </span>
                    <span>{region}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Words </span>
                    <span>{words}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Titles </span>
                    <span>{titles}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Overlords </span>
                    <span>{overlords}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Ancestra lWeapons </span>
                    <span>{ancestralWeapons}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}