import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ItemList from '../itemList/itemList';
import CharDetalis from '../charDetails/charDetails';
import RandomHouse from '../randomHouse/randomHouse';
import RandomBook from '../randomBook/randomBook';
import './app.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default class App extends Component {

    state = {
        showRandomChar: true,
        showRandomHouse: true,
        showRandomBook: true,
        error: false
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }
    toggleRandomHouse = () => {
        this.setState((state) => {
            return {
                showRandomHouse: !state.showRandomHouse
            }
        });
    }
    toggleRandomBook = () => {
        this.setState((state) => {
            return {
                showRandomBook: !state.showRandomBook
            }
        });
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage />
        }
        const char = this.state.showRandomChar ? <RandomChar /> : null;
        const house = this.state.showRandomHouse ? <RandomHouse /> : null;
        const book = this.state.showRandomBook ? <RandomBook /> : null;

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {char}
                            <Button color="info" className='btn' onClick={this.toggleRandomChar}>{this.state.showRandomChar ? 'Hide character' : 'View character'}</Button>
                        </Col>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {house}
                            <Button color="info" className='btn' onClick={this.toggleRandomHouse}>{this.state.showRandomHouse ? 'Hide house' : 'View house'}</Button>
                        </Col>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {book}
                            <Button color="info" className='btn' onClick={this.toggleRandomBook}>{this.state.showRandomBook ? 'Hide book' : 'View book'}</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetalis />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }


};