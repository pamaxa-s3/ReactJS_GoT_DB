import React, { Component } from 'react';
import './randomBook.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default class RandomBook extends Component {

    constructor() {
        super();
        this.updateBook();
    }

    gotService = new GotService();

    state = {
        book: {},
        loading: true,
        error: false
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    onBookLoaded = (book) => {
        this.setState({
            book,
            loading: false
        });
    }

    updateBook() {
        // const id = 120000000;
        const id = Math.floor(Math.random() * 12);

        this.gotService.getBook(id)
            .then(this.onBookLoaded)
            .catch(this.onError);
    }

    render() {

        const { book, loading, error } = this.state;

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <View book={book} /> : null;

        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const View = ({ book: { name, numberOfPages, publiser, released } }) => {
    return (
        <>
            <h4>Random Book: {name}</h4>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Number Of Pages </span>
                    <span>{numberOfPages}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Publiser </span>
                    <span>{publiser}</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between">
                    <span className="term">Released </span>
                    <span>{released}</span>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}