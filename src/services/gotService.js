import React from 'react';

export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not feth ${url}` + ` received ${res.status}`);
        }

        return await res.json();
    }

    async getAllCharacters() {
        const res = await this.getResourse(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }

    async getCharacter(id) {
        const character = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    async getAllBooks() {
        const res = await this.getResourse(`/books/`);
        return res.map(this._transformHouse);
    }

    async getBook(id) {
        const book = await this.getResourse(`/books/${id}`);
        return this._transformBook(book);
    }

    async getAllHouses() {
        const res = await this.getResourse(`/Houses/`);
        return res.map(this._transformHouse);
    }

    async getHous(id) {
        const house = await this.getResourse(`/Houses/${id}`);
        return this._transformHouse(house);
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlords: house.overlords,
            ancestralWeapons: house.ancestralWeapons
        }
    }
    
    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}

const got = new GotService();